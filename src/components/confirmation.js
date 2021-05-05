import React, { Component} from 'react';
//import { submitRegister } from '../actions/authActions'; ADD ACTIONS WE WANT FOR THIS PAGE SOON
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {fetchAccount, setAccount} from "../actions/accountActions";

class Confirmation extends Component {


        componentDidMount() {
            const {dispatch} = this.props;
            dispatch(fetchAccount(this.props.selectedAccount));
        }

    render() {

        const DetailInfo = () => {
            if (!this.props.selectedAccount) {
                return <div>Loading....</div>
            }

        return (
            <div style={{background : "lightgreen"}}>
                <h1 style={{background : "lightgreen"}}>Transaction Confirmation</h1>
                <h6 style={{background : "lightgreen"}}>Transaction Successful!</h6>
            <ListGroup>
                <ListGroup.Item>Sent to: </ListGroup.Item>
                <ListGroup.Item>Sent From: {localStorage.getItem('username')}</ListGroup.Item>
                <ListGroup.Item>Amount:</ListGroup.Item>
            </ListGroup>
            </div>
        )
    }

    return (
        <DetailInfo />
    )
}
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Confirmation);
