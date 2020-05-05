import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import connect from "react-redux/lib/connect/connect";


const mapStateToProps =(state)=>{
    return {
        postData: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
};
const mapDispatchToProps =(dispatch)=>{
    return {
        updateNewPostText:(text)=>{
            let action = UpdateNewPostTextActionCreator(text);
           dispatch(action);
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
};
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;