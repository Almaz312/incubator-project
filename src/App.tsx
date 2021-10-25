import React from 'react';
import './App.css';
import {Technologies} from './pages/Technologies';
import {Header} from "./pages/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};

export default App;