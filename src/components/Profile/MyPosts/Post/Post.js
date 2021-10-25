import React from "react";
import s from './Post.module.css'

export function Post(props) {
    return (
        <div className={s.item}>
            <img
                src='https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'>
            </img>
            {props.massage}
            <div>
                <span>{props.countsLike}</span>
            </div>
        </div>
    );
};