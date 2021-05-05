import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {logoutUser} from "../actions/authActions";

class transactionheader extends Component {
    logout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" bg="primary" variant="light">
                    <Navbar.Brand>
                        Team Ten Transaction App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <LinkContainer to="/transaction">
                                <Nav.Link disabled={!this.props.loggedIn}>New Transaction</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/account/' + (this.props.selectedAccount  ? this.props.selectedAccount : '')}>
                                <Nav.Link disabled={!this.props.loggedIn}>My Account</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn : state.auth.loggedIn,
        username : state.auth.username,
    }
}

export default connect(mapStateToProps)(transactionheader);