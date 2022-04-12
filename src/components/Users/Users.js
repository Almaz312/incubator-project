import React from "react";
import './Users.css'

export const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                            <img src={u.photoUrl} className="userImg"></img>
                        <div> {
                            u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                        </div>
                    </div>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}