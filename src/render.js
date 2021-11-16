import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/State";

export const rerenderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={State} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}