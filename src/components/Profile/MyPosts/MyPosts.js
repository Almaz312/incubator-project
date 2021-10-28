import {Post} from "./Post/Post";
import './MyPosts.css'

export function MyPosts(props) {
    const postsElements = props.posts.map(p => <Post massage={p.massage} countsLike={p.likesCount} id={p.id}/>)
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