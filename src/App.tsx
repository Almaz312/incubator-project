import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"></img>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massage</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                </div>
                <div>
                    Ava   +    description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                        <div>post3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;