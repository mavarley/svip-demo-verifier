import React from 'react'

import "../stylesheets/common.css"
import Flag from '../assets/flag.png'

import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import {Image, Button} from 'semantic-ui-react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("component will receive props", nextProps.encodeImage)
        this.setState({
            image: nextProps.encodeImage
        })
    }

    render(){
        return(

            <div>
                <div id="header-top-bar"> </div>
                <div id="header-middle-bar">
                    <Container className="pt-2">
                        <img src={Flag} alt="Mini american flag" width="20px" height="14px" className="mr-2 mb-1"/>
                        Department of Homeland Security
                    </Container>
                    <hr id="header-break-line"/>
                </div>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="lightNav">
                    <Container>
                        <Navbar.Brand id="navbar-brand" fixed="top" href="#home" className="darkblue">
                            USCIS - eVerify
                        </Navbar.Brand>
                        {this.state.image !== "" ? (
                                <Dropdown className="justify-content-end" drop="down">
                                    <Dropdown.Toggle>
                                        <Image id="profile-picture" src={this.state.image}/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="d-none d-md-block"><Button>+ credential</Button></Dropdown.Item>
                                        <Dropdown.Item className="d-xs-block d-md-none"><Button>+</Button></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        ): null}
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header