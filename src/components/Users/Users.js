import React from "react";
import './Users.css'
import axios from "axios";
import userPhoto from '../../assets/Images/user.png'

export const Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    console.log(props.users)
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className="userImg" />
                    <div> {
                        u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                    </div>
                </div>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}