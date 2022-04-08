import React from "react";
import './Dialogs.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Massage} from "./Massage/Massage";

export function Dialogs(props) {
    let state = props.dialogPage;

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const massagesElements = state.massages.map(massage => <Massage massage={massage.massage} id={massage.id}/>)
    const newMessageBody = state.newMassageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMassageBody(body)
    }
    let onSendMessageClick = () => {
        props.sendMassage();
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