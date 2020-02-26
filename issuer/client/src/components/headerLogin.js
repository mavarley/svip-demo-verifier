import React from 'react'
import {Nav} from 'react-bootstrap'

function HeaderLogin(props) {
    return (
        <Nav>
            <Nav.Link className="nav-login">Log in</Nav.Link>
            <Nav.Link className="nav-signup" href="/infoForm">Sign up</Nav.Link>
        </Nav>
    );
}

export default HeaderLogin