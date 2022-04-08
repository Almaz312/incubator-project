const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Esen"},
        {id: 3, name: "Aman"},
        {id: 4, name: "Asan"},
        {id: 5, name: "Bob"},
        {id: 6, name: "Darya"},
    ],
    massages: [
        {id: 1, massage: "Hi"},
        {id: 2, massage: "How are you"},
        {id: 3, massage: "Fine"},
        {id: 4, massage: "You"},
        {id: 5, massage: "and"},
        {id: 6, massage: "Me"},
    ],
    newMassageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
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

export const sendMassageCreator = () => ({type: SEND_MASSAGE})
export const updateNewMassageBodyCreator = (body) => ({type: UPDATE_NEW_MASSAGE_BODY, body: body});