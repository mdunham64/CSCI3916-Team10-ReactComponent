import constants from '../constants/actionTypes'

let initialState = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    transactions: [],
    balance: 0
}

const accountReducer = (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.SET_ACCOUNT:
            updated['selectedAccount'] = action.selectedAccount;
            return updated;
        case constants.FETCH_ACCOUNT:
            updated['selectedAccount'] = action.selectedAccount;
            return updated;
        default:
            return state;
    }
}

export default accountReducer;