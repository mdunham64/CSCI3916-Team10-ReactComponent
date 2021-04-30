import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'
import {submitLogin} from "./authActions";

function transactionFetched(transaction) {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        selectedAccount: transaction
    }
}

function transactionSet(transaction) {
    return {
        type: actionTypes.SET_ACCOUNT,
        selectedAccount: transaction
    }
}

export function setTransaction(transaction) {
    return dispatch => {
        dispatch(transactionSet(transaction));
    }
}

export function submitTransaction(data) { //submit our transaction
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).catch((e) => console.log(e));
    }
}
