import React, { Component} from 'react';
import { submitTransaction } from '../actions/transactionActions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

class Transaction extends Component {

    constructor(props){
        super(props);

        this.updateDetails = this.updateDetails.bind(this);
        this.transaction = this.transaction.bind(this);
        this.state = {
            details:{
                Sender_name: localStorage.getItem('username'),
                recipient_name: '',
                amount: ''
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
                <Form.Group controlId="Recipient Name" size="lg">
                    <Form.Label>Recipient Name</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.name} type="text" placeholder="Recipient Name" />
                    <Form.Text className="text-muted">
                        This is the Username registered with their application account.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="Amount" size="lg">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.username} type="text" placeholder="Amount" />
                </Form.Group>
                <Button onClick={this.transaction}>Send</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Transaction);

