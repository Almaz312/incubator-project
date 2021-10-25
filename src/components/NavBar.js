import React from "react";
import './NavBar/NavBar.css'

export function NavBar() {
    return (
        <nav className="nav">
            <div className="item">
                <a>Profile</a>
            </div>
            <div className="item">
                <a>Massage</a>
            </div>
            <div className="item">
                <a>Music</a>
            </div>
            <div className="item">
                <a>News</a>
            </div>
            <div className="item">
                <a>Settings</a>
            </div>
        </nav>
    );
};