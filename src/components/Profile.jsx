import React from 'react';
import './Profile.css'

function Profile() {
    return <div className="profile">
    <div>
      <img           
        src= "https://images11.esquire.ru/upload/img_cache/813/81312fe17cd8a6fc9e963cb67fc9998b_ce_3000x1871x0x134_cropped_960x600.jpg">
      </img>
    </div>

    <div>
      ava+description
    </div>

    <div>
      My post
      <div>
          New post
      </div>
      <div className = 'posts'>
        <div className = 'item'>
            Post 1
        </div>
        <div className = 'item'>
            Post 2
        </div>
      </div>
      
    </div>
    
  </div>


}

export default Profile;