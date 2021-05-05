import React, { Component} from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {fetchAccount} from "../actions/accountActions";

class Accountpage extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchAccount());
    }

    render() {

        const DetailInfo = () => {
            if (!this.props.selectedAccount) {
                return <div>Loading....</div>
            }

            return (
                <ListGroup variant="flush">
                    <ListGroup.Item>Below is your account information.</ListGroup.Item>
                    <ListGroup.Item>Username: {localStorage.getItem('username')}</ListGroup.Item>
                    <ListGroup.Item>Current Balance: <b>${this.props.selectedAccount.balance}</b></ListGroup.Item>
                    <ListGroup.Item>PAST TRANSACTIONS:</ListGroup.Item>
                    <ListGroup.Item>
                        {this.props.selectedAccount.transactions.map((transaction, i) =>
                        <p key={i}>
                            Approved: <b> {transaction.approved.toString()}</b> Sender: <b>{transaction.sender}</b> Recipient: <b>{transaction.receiver}</b> Payment Amount: <b>${transaction.paymentAmount}</b>
                        </p>)}
                    </ListGroup.Item>
                </ListGroup>
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedAccount: state.account.selectedAccount
    }
}

export default connect(mapStateToProps)(Accountpage);
