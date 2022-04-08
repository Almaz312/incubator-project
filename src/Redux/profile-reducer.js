const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, massage: "Hi, how are you?", likesCount: "12"},
        {id: 2, massage: "It's my first post", likesCount: "23"},
        {id: 2, massage: "It's my post", likesCount: "12"},
        {id: 2, massage: "It's my first post", likesCount: "34"},
    ],
    newPostText: "it-kamasutra.com"
}
export const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                massage: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
};
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
