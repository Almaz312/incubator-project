import React from "react";
import './Profile.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
};
