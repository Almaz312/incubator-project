import {NavLink} from "react-router-dom";
import React from "react";
import './../Dialogs.css'

export function DialogItem(props) {
    const path = "/dialogs/" + props.id;
    return (
        <div className="dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};