import {Post} from "./Post/Post";
import './MyPosts.css'
import React from "react";


export function MyPosts(props) {
    const postsElements = props.posts.map(p => <Post massage={p.massage} countsLike={p.likesCount} id={p.id}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        debugger;
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className="myPosts">
            <div>
                <h3>My Posts</h3>
                <div>
                    <div className="btnBlock">
                        <textarea ref={newPostElement}></textarea>
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