package db

import (
	"context"
	"fmt"
	"github.com/go-kivik/kivik"
	log "github.com/sirupsen/logrus"
)

func StoreUserAccount(database *kivik.DB, newAccount AccountDB) error {
	fmt.Printf("%+v", newAccount)
	_, err := database.Put(context.TODO(), newAccount.Username, newAccount)
	if err != nil {
		log.Error(err)
		return err
	}
	return nil
}

func CheckDuplicateWalletAccount(database *kivik.DB, userName string) bool {
	row := database.Get(context.TODO(), userName)
	var account AccountDB

	if err := row.ScanDoc(&account); err != nil {
		// account does not exist
		return false
	} else {
		// account exist
		return true
	}
}

func GetAccount(database *kivik.DB, userName string) (AccountDB, error) {
	row := database.Get(context.TODO(), userName)
	var account AccountDB

	if err := row.ScanDoc(&account); err != nil {
		return account, err
	} else {
		return account, nil
	}
}

func GetPrivateKey(didString string, dbName string) (string, error) {
	database := StartDB(dbName)

	query := map[string]interface{}{
		"selector": map[string]interface{}{
			"did": map[string]interface{}{
				"$eq": didString,
			},
		},
	}
	rows, err := database.Find(context.TODO(), query)
	if err != nil {
		log.Error("error retrieving rows from db ", err)
		return "", err
	}

	var doc AccountDB
	for rows.Next() {
		if err := rows.ScanDoc(&doc); err != nil {
			log.Error(err)
		}
		log.Printf("doc %+v", doc)
	}
	if rows.Err() != nil {
		log.Error("error scan doc ", rows.Err())
		return "", rows.Err()
	}
	return doc.PrivateKey, nil
}

func GetDID(username string, dbName string) (string, error) {
	database := StartDB(dbName)
	row := database.Get(context.TODO(), username)
	var accountInfo AccountDB

	// entry does not exist in db, return error
	if err := row.ScanDoc(&accountInfo); err != nil {
		return "", err
	} else {
		// entry with given sessionid already exists in db, return fetched document
		return accountInfo.DID, nil
	}
}
