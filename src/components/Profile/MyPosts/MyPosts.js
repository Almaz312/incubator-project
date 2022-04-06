import {Post} from "./Post/Post";
import './MyPosts.css'
import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";


export function MyPosts(props) {
    const postsElements = props.posts.map(p => <Post massage={p.massage} countsLike={p.likesCount} id={p.id}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    };

    return (
        <div className="myPosts">
            <div>
                <h3>My Posts</h3>
                <div>
                    <div className="btnBlock">
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div className="btnBlock">
                        <button className="btnAdd" onClick={addPost}>Add posts</button>
                    </div>
                </div>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
};