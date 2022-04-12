const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg', followed: false, fullName: 'Bob', status: 'Hi boys', location: {city: 'Bishkek', country: 'KGZ'}},
        {id: 2, followed: true, fullName: 'Sasha', status: 'Hi boys', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Petya', status: 'Hi boys', location: {city: 'Almaty', country: 'KZ'}},
        {id: 4, followed: true, fullName: 'Yura', status: 'Hi boys', location: {city: 'Tashkent', country: 'UZ'}},

    ],
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, action.users]
            }
        default:
            return state
    }
};
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
