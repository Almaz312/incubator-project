import React from "react";
import './Dialogs.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Massage} from "./Massage/Massage";
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogs-reducer";

export function Dialogs(props) {

    let state = props.store.getState().dialogPage;

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const massagesElements = state.massages.map(massage => <Massage massage={massage.massage} id={massage.id}/>)
    const newMessageBody = state.newMassageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMassageBodyCreator(body));
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMassageCreator());
    }
    return (
        <div className="dialogs">
            <div className="dialogs-item">
                {dialogsElements}
            </div>
            <div className="massages">
                {massagesElements}
            </div>
            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
};