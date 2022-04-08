const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMassageBody = action.body;
            return state;
        case SEND_MASSAGE:
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.massages.push({id: 7, massage: body});
            return state;
        default:
            return state
    }
};