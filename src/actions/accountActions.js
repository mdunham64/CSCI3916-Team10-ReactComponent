import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'

function accountFetched(account) {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        selectedAccount: account
    }
}

function accountSet(account) {
    return {
        type: actionTypes.SET_ACCOUNT,
        selectedAccount: {username: localStorage.getItem('username')} //change back to selectedAccount: account once API call is finished
    }
}

export function setAccount(account) {
    return dispatch => {
        dispatch(accountSet(account));
    }
}

export function fetchAccount() {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/transactions?username=${localStorage.getItem('username')}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(accountFetched(res));
        }).catch((e) => console.log(e));
    }
}