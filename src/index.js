import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, massage: "Hi, how are you?", likesCount: "12"},
    {id: 2, massage: "It's my first post", likesCount: "23"},
    {id: 2, massage: "It's my post", likesCount: "12"},
    {id: 2, massage: "It's my first post", likesCount: "34"},
]

const dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Esen"},
    {id: 3, name: "Aman"},
    {id: 4, name: "Asan"},
    {id: 5, name: "Bob"},
    {id: 6, name: "Darya"},
];

const massages = [
    {id: 1, massage: "Hi"},
    {id: 2, massage: "How are you"},
    {id: 3, massage: "Fine"},
    {id: 4, massage: "You"},
    {id: 5, massage: "and"},
    {id: 6, massage: "Me"},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} massages={massages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
