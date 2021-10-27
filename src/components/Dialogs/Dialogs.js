import React from "react";
import './Dialogs.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className="dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Massage = (props) => {
    return (
        <div className="massage">{props.massage}</div>
    );
};

export function Dialogs() {
    return (
        <div className="dialogs">
            <div className="dialogs-item">
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Esen" id="2"/>
                <DialogItem name="Aman" id="3"/>
                <DialogItem name="Arstan" id="4"/>
                <DialogItem name="Bakyt" id="5"/>
                <DialogItem name="Bob" id="6"/>
            </div>
            <div className="massages">
              <Massage massage="Hi"/>
              <Massage massage="How are you"/>
              <Massage massage="Fine"/>
            </div>
        </div>
    );
};