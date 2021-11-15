import React from "react";
import './Dialogs.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Massage} from "./Massage/Massage";

const dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Esen"},
    {id: 3, name: "Aman"},
    {id: 4, name: "Asan"},
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
const dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
const massagesElements = massageData.map(massage => <Massage massage={massage.massage} id={massage.id}/>)

const newPostElement = React.createRef();

const addPost = () => {
    const text = newPostElement.current.value;
    alert(text)
}

export function Dialogs() {
    return (
        <div className="dialogs">
            <div className="dialogs-item">
                {dialogsElements}
            </div>
            <div className="massages">
                {massagesElements}
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>addPost</button>
            </div>
        </div>
    );
};