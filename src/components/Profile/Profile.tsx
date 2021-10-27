import React from "react";
import './Profile.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};