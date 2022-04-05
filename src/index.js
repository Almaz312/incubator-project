import reportWebVitals from './reportWebVitals';
import State from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/State";

export const rerenderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={State} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(State)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
