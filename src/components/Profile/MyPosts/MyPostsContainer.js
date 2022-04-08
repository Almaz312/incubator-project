import './MyPosts.css'
import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export function MyPostsContainer(props) {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />);
};