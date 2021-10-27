import {Post} from "./Post/Post";
import './MyPosts.css'

export function MyPosts() {

    const postData = [
        {id: 1, massage: "Hi, how are you?", likesCount: "12"},
        {id: 2, massage: "It's my first post", likesCount: "23"},
    ]

    return (
        <div className="myPosts">
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div className="btnBlock">
                        <button className="btnAdd">Add posts</button>
                    </div>
                </div>
            </div>
            <div className="posts">
                <Post massage={postData[0].massage} countsLike={postData[0].likesCount}/>
                <Post massage={postData[1].massage} countsLike={postData[1].likesCount}/>
            </div>
        </div>
    );
};