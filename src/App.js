import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;