import React from 'react';
import s from './Posts.module.css'

function Posts(props) {
    return (
        <div className = {s.item}>
            {props.post}   <br></br>         
            <span>{props.like} Like </span>
            <span>{props.dislike} Dislike </span>
        </div>

      )
}

export default Posts;