import React from "react";
import './Dialogs.css'
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export function DialogsContainer(props) {
    let state = props.store.getState().dialogPage;

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMassageBodyCreator(body));
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMassageCreator());
    }
    return (
        <Dialogs updateNewMassageBody={onNewMessageChange} sendMassage={onSendMessageClick} dialogPage={state}/>
    );
};