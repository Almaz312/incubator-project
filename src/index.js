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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
