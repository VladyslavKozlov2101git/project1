import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

function MyPosts(props) {



    let postsElemnts = props.posts.map(p => <Posts post ={p.post} like = {p.like} dislike = {p.dislike} /> )

    let newPostElement = React.createRef();

    let addPost = () =>{
      let text = newPostElement.current.value;
      alert(text)
    }


    return <div className={s.profile}>    
    <div className={s.postsBlock}>
      <h2>My post</h2> 
      <div>
          <div>
            <textarea ref = {newPostElement}></textarea>
          </div>

          <div>
            <button onClick ={addPost}>Add post</button>
          </div>
          
      </div>
      <div>
          New post
      </div>
      <div className = {s.posts}>
        {postsElemnts}
      </div>
      
    </div>
    
  </div>


}

export default MyPosts;