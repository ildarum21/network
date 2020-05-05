import React from 'react';
import s from "./MyPost.module.css"
import Post from './Post/Post';

const MyPost = (props) => {

    let PostElements =
        props.postData.map(p => <Post message={p.message} likes={p.LikesCount}/>);


    let newPostElement =React.createRef();


    const addPost = () => {
       props.addPost();

    };

    const onPostChange=()=>{
        let text =newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (

        <div className={s.postsBlock}>
            <h3> my posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    );
}
export default MyPost;