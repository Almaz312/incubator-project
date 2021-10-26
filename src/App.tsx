import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route/>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </div>
    );
};

export default App;