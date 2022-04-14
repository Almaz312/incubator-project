import React from "react";
import './Users.css'
import axios from "axios";
import userPhoto from '../../assets/Images/user.png'

export class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            <div>
                <span className="selectedPage">1</span>
                <span className="selectedPage">2</span>
                <span className="selectedPage">3</span>
                <span className="selectedPage">4</span>
                <span className="selectedPage">5</span>
            </div>
            {this.props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className="userImg"/>
                    <div> {
                        u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
            </div>)}
        </div>
    }
}