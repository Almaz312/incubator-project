import './MyPosts.css'
import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import ContextStore from "../../../ContextStore";


export function MyPostsContainer() {
    return <ContextStore.Consumer>
        {(store) => {
            const state = store.getState()
            const addPost = () => {
                store.dispatch(addPostActionCreator());
            };
            const onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action);
            };
            return (
                <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                />)
        }
    }
    </ContextStore.Consumer>
};