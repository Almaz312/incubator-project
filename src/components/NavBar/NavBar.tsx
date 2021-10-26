import React from "react";
import './NavBar.css'

export function NavBar() {
    return (
        <nav className="nav">
            <div className="item">
                <a href='/profile'>Profile</a>
            </div>
            <div className="item">
                <a href='/dialogs'>Massage</a>
            </div>
            <div className="item">
                <a href='/music'>Music</a>
            </div>
            <div className="item">
                <a href='/news'>News</a>
            </div>
            <div className="item">
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
};