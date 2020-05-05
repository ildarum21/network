import React from 'react';
import s from "./Post.module.css"
const Post = (props) => {
  
   return (
  
      <div className={s.item}>
      
         <img src="https://i.pinimg.com/736x/61/e0/9d/61e09d6ff43a5b2da4da5f6a6f045a91.jpg"></img>
        <p>Автор:,Сообщение: {props.message} </p>
      <div>
            <span>likes:{props.likes}</span>
         </div>
      </div>

   );
}
export default Post;