import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

function MyPosts(props) {



    let postsElemnts = props.posts.map(p => <Posts post ={p.post} like = {p.like} dislike = {p.dislike} /> )

    let newPostElement = React.createRef();

    let addPost = () =>{
      props.addPost();
    }

    let onPostCnange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText (text);
      newPostElement.current.value = "";
    }


    return <div className={s.profile}>    
    <div className={s.postsBlock}>
      <h2>My post</h2> 
      <div>
          <div>
            <textarea onChange = {onPostCnange} ref = {newPostElement} value={props.newPostText} />
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