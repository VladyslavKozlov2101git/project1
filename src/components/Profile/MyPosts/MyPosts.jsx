import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

function MyPosts() {
    return <div className={s.profile}>    
    <div>
      My post
      <div>
          <textarea>

          </textarea>
          <button>Add post</button>
      </div>
      <div>
          New post
      </div>
      <div className = {s.posts}>
        <Posts message ="Hi, how are you?" like = "15" dislike = "20" />
        <Posts message ="It's my first post" like = "6" dislike = "7" />
      </div>
      
    </div>
    
  </div>


}

export default MyPosts;