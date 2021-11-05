import React from "react";
import './Dialogs.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Massage} from "./Massage/Massage";

export function Dialogs(props) {
    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const massagesElements = props.state.massages.map(massage => <Massage massage={massage.massage} id={massage.id}/>)
    return (
        <div className="dialogs">
            <div className="dialogs-item">
                {dialogsElements}
            </div>
            <div className="massages">
                {massagesElements}
            </div>
        </div>
    );
};