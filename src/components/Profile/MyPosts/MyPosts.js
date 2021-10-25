import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add posts</button>
                </div>
            </div>
            <Post  countsLike="like 32" massage="Hi, how are you?" />
            <Post  countsLike="like 12" massage="It's my first post" />
        </div>
    );
};