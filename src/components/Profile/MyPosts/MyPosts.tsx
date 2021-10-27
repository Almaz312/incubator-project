import {Post} from "./Post/Post";
import './MyPosts.css'

export function MyPosts() {

    const postData = [
        {id: 1, massage: "Hi, how are you?", likesCount: "12"},
        {id: 2, massage: "It's my first post", likesCount: "23"},
    ]

    const postsElements = postData.map(p => <Post massage={p.massage} countsLike={p.likesCount} id={p.id}/>)

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
                {postsElements}
            </div>
        </div>
    );
};