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
            <Post  countsLike="32" massage="Hi, how are you?" />
            <Post  countsLike="12" massage="It's my first post" />
        </div>
    );
};