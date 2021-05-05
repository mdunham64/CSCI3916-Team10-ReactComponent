import React, { Component} from 'react';
import { submitTransaction } from '../actions/transactionActions';
import { connect } from 'react-redux';
import { Form, Button, ListGroup } from 'react-bootstrap';
import {transactionFetched} from "../actions/transactionActions";

class Transaction extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(transactionFetched());
    }

    constructor(props){
        super(props);

        this.updateDetails = this.updateDetails.bind(this);
        this.transaction = this.transaction.bind(this);
        this.state = {
            details:{
                sender: localStorage.getItem('username'),
                receiver_name: '',
                paymentAmount: '',
            }
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    transaction(){
        const {dispatch} = this.props;
        dispatch(submitTransaction(this.state.details));

    }

    render(){
        return (
            <Form className='form-horizontal'>
                <Form.Group controlId="receiver_name">
                    <Form.Label>receiver_name</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.receiver_name} type="text" placeholder="Recipient Name" />
                    <Form.Text className="text-muted">
                        This is the Username registered with their application account.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="paymentAmount">
                    <Form.Label>paymentAmount</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.paymentAmount} type="number" placeholder="Amount" />
                </Form.Group>
                <Button onClick={this.transaction}>Send</Button>
                <ListGroup>
                </ListGroup>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Transaction);

