import React from "react";
import './Profile/Profile.css'
import {MyPosts} from "./Profile/MyPosts/MyPosts";

export function Profile() {
    return (
        <div className="content">
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg">
                </img>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    );
};