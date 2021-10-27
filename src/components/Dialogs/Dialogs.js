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

const dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Esen"},
    {id: 3, name: "Aman"},
    {id: 4, name: "Arstan"},
    {id: 5, name: "Bob"},
    {id: 6, name: "Darya"},
];

const massageData = [
    {id: 1, massage: "Hi"},
    {id: 2, massage: "How are you"},
    {id: 3, massage: "Fine"},
    {id: 4, massage: "You"},
    {id: 5, massage: "and"},
    {id: 6, massage: "Me"},
]
export function Dialogs() {
    return (
        <div className="dialogs">
            <div className="dialogs-item">
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Aman" id="3"/>
                <DialogItem name="Arstan" id="4"/>
                <DialogItem name="Bakyt" id="5"/>
                <DialogItem name="Bob" id="6"/>
            </div>
            <div className="massages">
              <Massage massage={massageData[0].massage} id={massageData[0].id}/>
              <Massage massage={massageData[1].massage} id={massageData[1].id}/>
              <Massage massage={massageData[2].massage} id={massageData[2].id}/>
              <Massage massage={massageData[3].massage} id={massageData[3].id}/>
              <Massage massage={massageData[4].massage} id={massageData[4].id}/>
              <Massage massage={massageData[5].massage} id={massageData[5].id}/>
            </div>
        </div>
    );
};