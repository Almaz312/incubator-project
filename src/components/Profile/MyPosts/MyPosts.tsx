import {Post} from "./Post/Post";
import './MyPosts.css'

export function MyPosts() {
    return (
        <div className="myPosts">
            <div>
                <h3> My Posts</h3>
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
                <Post countsLike="32" massage="Hi, how are you?"/>
                <Post countsLike="12" massage="It's my first post"/>
            </div>
        </div>
    );
};