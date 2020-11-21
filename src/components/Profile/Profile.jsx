import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
    return <div className={s.profile}>
    <div>
      <img           
        src= "https://images11.esquire.ru/upload/img_cache/813/81312fe17cd8a6fc9e963cb67fc9998b_ce_3000x1871x0x134_cropped_960x600.jpg">
      </img>
    </div>

    <div>
      ava+description
    </div>

    <MyPosts />
    
  </div>


}

export default Profile;