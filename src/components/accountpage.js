import React, { Component} from 'react';
//import { submitRegister } from '../actions/authActions'; ADD ACTIONS WE WANT FOR THIS PAGE SOON
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {fetchAccount, setAccount} from "../actions/accountActions";

class Accountpage extends Component {

/*
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchAccount(this.props.selectedAccount));
    }
*/
    render() {
        /*
        const DetailInfo = () => {
            if (!this.props.selectedAccount) {
                return <div>Loading....</div>
            }*/

            return (
                <ListGroup>
                    <ListGroup.Item>Below is your account information.</ListGroup.Item>
                    <ListGroup.Item>Username: {localStorage.getItem('username')}</ListGroup.Item>
                    <ListGroup.Item>Current Balance:</ListGroup.Item>
                    <ListGroup.Item>PAST TRANSACTIONS:</ListGroup.Item>
                </ListGroup>
            )
        }
        /*
        return (
            <DetailInfo />
        )
    }*/
}

const mapStateToProps = state => {
    return {
        selectedAccount: state.account.selectedAccount
    }
}

export default connect(mapStateToProps)(Accountpage);
