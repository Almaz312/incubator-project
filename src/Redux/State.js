import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: "Hi, how are you?", likesCount: "12"},
                {id: 2, massage: "It's my first post", likesCount: "23"},
                {id: 2, massage: "It's my post", likesCount: "12"},
                {id: 2, massage: "It's my first post", likesCount: "34"},
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogPage: {
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
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    rerenderEntireTree() {
        console.log('state changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this.rerenderEntireTree(this._state);
    },
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMassageCreator = () => ({type: SEND_MASSAGE})
export const updateNewMassageBodyCreator = (body) => ({type: UPDATE_NEW_MASSAGE_BODY, body: body});

export default store;
window.store = store;