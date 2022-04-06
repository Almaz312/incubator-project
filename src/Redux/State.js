let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: "Hi, how are you?", likesCount: "12"},
                {id: 2, massage: "It's my first post", likesCount: "23"},
                {id: 2, massage: "It's my post", likesCount: "12"},
                {id: 2, massage: "It's my first post", likesCount: "34"},
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Esen"},
                {id: 3, name: "Aman"},
                {id: 4, name: "Asan"},
                {id: 5, name: "Bob"},
                {id: 6, name: "Darya"},
            ],
            massages: [
                {id: 1, massage: "Hi"},
                {id: 2, massage: "How are you"},
                {id: 3, massage: "Fine"},
                {id: 4, massage: "You"},
                {id: 5, massage: "and"},
                {id: 6, massage: "Me"},
            ]
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    rerenderEntireTree() {
        console.log('state changed')
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                massage: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        }
    }
}

export default store;
window.store = store;