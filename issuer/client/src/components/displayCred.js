import React from 'react'

// ---------- Modules ----------
import JSONPretty from "react-json-pretty";

import * as polyfill from 'credential-handler-polyfill/';
import {Redirect, useHistory} from 'react-router-dom'
import axios from "axios";
import _ from 'lodash'
import Cookies from "js-cookie";
// -----------------------------
// ---------- Styles -----------
import {Button, Col, Container, Row, Spinner} from 'react-bootstrap'
import {FaWallet} from "react-icons/fa";
// -----------------------------

class DisplayCred extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalVC: '',
            vc: '',
            finished: false, // indicate that storing has completed, need to redirect
            loaded: false, // indicate that vc has done loading
            errorState: false,
        };

        this.handleSave = this.handleSave.bind(this);
        this.createVC = this.createVC.bind(this);

        // load CHAPI
        (async () => {
            await polyfill.loadOnce(
                `${process.env.REACT_APP_MEDIATOR_URL}/mediator?origin=` +
                + encodeURIComponent(window.location.origin));
        })();
    }

    // call CHAPI store action (component credentialstore in wallet)
    async handleSave() {
        // create new permanent resident card type web credential
        const credToStore = this.state.originalVC;
        const credType = 'PermanentResidentCard';
        // eslint-disable-next-line no-undef
        const webCred = new WebCredential(credType, credToStore);
        try {
            const result = await navigator.credentials.store(webCred);
            console.log("store result => ", result.data.message)
            if (result != null && !result.data.message !== "Request failed with status code 500") {
                this.setState({
                    finished: true,
                    errorState: false,
                })
            } else {
                this.setState({
                    errorState: true,
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    // encode sessionID in url to query user info from db and generate vc based on user info
    async createVC() {
        let sessionID = window.location.pathname.split("/")[2];
        let walletDID = window.location.pathname.split("/")[3];
        try {
            // response data contains vc generated by edge service
            const res = await axios.get('https://' + `${process.env.REACT_APP_HOST}` + '/createVC?ID='+ sessionID + '&walletDID=' + walletDID, {crossdomain:true})
            console.log("generate vc resp => ", JSON.stringify(res, null, 2))
            let temp = _.cloneDeep(res.data)
            this.setState({
                originalVC: res.data,
                vc: temp,
                loaded: true,
            });
            console.log("vc => " ,this.state.vc)
        } catch (e){
            console.log(e);
        }
    }

    componentDidMount() {
        this.createVC()
    }

    render() {
        if (this.state.finished === true) {
            return <Redirect push to='/done'/>
        }

        if (this.state.errorState === true) {
            return <Redirect push to ='/failed'/>
        }
        return (
            <Container>
                  <Row>
                      <Col className="form-space">
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <h1 className="mb-4">Your VC is Ready! Click Save to save it in your wallet!</h1>
                          {this.state.loaded ?
                              (<div className="txt-left">
                                  <JSONPretty json={this.state.vc} mainStyle="padding:1em" space="4" theme={{
                                      main: 'line-height:1.3;color:#00008b;background:#ffffff;overflow:auto;',
                                      error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                                      key: 'color:#f92672;',
                                      string: 'color:#2B7942;',
                                      value: 'color:#2B7942;',
                                      boolean: 'color:#0000B3;',
                                  }}/>
                                  <Button className="float-right mb-5" onClick={this.handleSave}>Save <FaWallet className="white ml-1 mb-1"/></Button>
                              </div>) :
                              (<Spinner className="center" animation="border" variant="primary"/>)}
                      </Col>
                  </Row>
            </Container>
        )
    }
}

export default DisplayCred