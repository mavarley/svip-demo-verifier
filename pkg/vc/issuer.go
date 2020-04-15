package vc

import (
	"bytes"
	"encoding/json"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"io/ioutil"
	"net/http"
	"sk-git.securekey.com/labs/svip-demo-verifier/pkg/db"
	"strings"
)

func GenerateVC(client *http.Client, userInfo db.UserInfoDB) (db.PermanentResidentCardDB, error) {

	initConfig()

	vcsHost := viper.GetString("issuer.host")
	vcsPort := viper.GetString("issuer.port")

	credReqURL := "http://" + vcsHost + vcsPort + "/credential"

	var vc db.PermanentResidentCardDB

	log.Info("Generating VC")

	vcRequest := map[string]interface{}{
		"@context": []string{"https://www.w3.org/2018/credentials/v1", "https://w3id.org/citizenship/v1"},
		"type":     []string{"VerifiableCredential", "PermanentResidentCard"},
		"credentialSubject": map[string]interface{}{
			"id":                     userInfo.DID,
			"type":                   []string{"PermanentResident", "Person"},
			"givenName":              userInfo.CredentialSubject.GivenName,
			"familyName":             userInfo.CredentialSubject.FamilyName,
			"gender":                 userInfo.CredentialSubject.Gender,
			"image":                  userInfo.Image,
			"residentSince":          userInfo.CredentialSubject.ResidentSince,
			"lprCategory":            userInfo.CredentialSubject.LPRCategory,
			"lprNumber":              userInfo.CredentialSubject.LPRNumber,
			"commuterClassification": userInfo.CredentialSubject.CommuterClassification,
			"birthCountry":           userInfo.CredentialSubject.BirthCountry,
			"birthDate":              userInfo.CredentialSubject.BirthDate,
		},
		"profile": "uscis",
	}
	requestBytes, err := json.Marshal(vcRequest)
	if err != nil {
		log.Error("marshal cred request json error => ", err)
		return vc, err
	}

	req, err := http.NewRequest("POST", credReqURL, bytes.NewBuffer(requestBytes))
	if err != nil {
		log.Error("create cred request error => ", err)
		return vc, err
	}

	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)

	data, err := ioutil.ReadAll(resp.Body)
	log.Print(string(data))

	defer resp.Body.Close()
	if err != nil || resp == nil {
		log.Error("create credential error => ", err)
		return vc, err
	}

	if json.Unmarshal(data, &vc) != nil {
		log.Error("marshal cred response json error => ", err)
		return vc, err
	} else {
		log.Info("credential json => ", vc)
		log.Info("successfully generated vc")
	}
	return vc, nil
}

func initConfig() {
	// Use vcsconfig.yaml configurations
	viper.AddConfigPath("/pkg/config/")
	viper.SetConfigName("vcsconfig")
	viper.SetConfigType("yaml")
	viper.SetEnvPrefix("svip")
	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	if err := viper.ReadInConfig(); err != nil {
		log.Fatal("could not read config file: ", err)
	}
}
