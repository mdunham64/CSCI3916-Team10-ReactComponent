import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'


export function transactionFetched(transaction) {
    return {
        type: actionTypes.FETCH_TRANSACTION,
        selectedTransaction: transaction
    }
}

function transactionSet(transaction) {
    return {
        type: actionTypes.SET_TRANSACTION,
        selectedTransaction: transaction
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
        return fetch(`${env.REACT_APP_API_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log(JSON.stringify(response));
            dispatch(setTransaction(JSON.stringify(response)));
        }).catch((e) => console.log(e));
    }
}
