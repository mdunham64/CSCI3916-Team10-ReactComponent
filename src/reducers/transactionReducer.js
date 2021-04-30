import constants from '../constants/actionTypes'

let initialState = {
    transUsers: [],
    amount: 0,
    senderBalance: 0,
    receiverBalance: 0
}

const transactionReducer = (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.SET_TRANSACTION:
            updated['selectedTransaction'] = action.selectedTransaction;
            return updated;
        case constants.FETCH_ACCOUNT:
            updated['selectedTransaction'] = action.selectedTransaction;
            return updated;
        default:
            return state;
    }
}

export default transactionReducer;