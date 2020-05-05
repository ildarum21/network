import sidebarReducer from "./sidebar-reducer";
import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState ={
        postData: [
            { id: 1, message: 'Hi!', LikesCount: "12" },
            { id: 2, message: 'How are you?', LikesCount: "10" },
            { id: 3, message: 'Yo!', LikesCount: "11" },
            { id: 4, message: 'Yo!', LikesCount: "20" },
            { id: 5, message: 'Yo!', LikesCount: "30" },
            { id: 6, message: 'Yo!!!!', LikesCount: "40" }
        ],
        newPostText:"it-kamasutra",
        profile:null
    };
export const profileReducer =(state=initialState,action)=>{
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                LikesCount: 1
            };
            let stateCopy = {
                ...state,
                postData:[...state.postData,newPost],
                newPostText : ''
            };
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText:action.newText
            };
        case SET_USER_PROFILE:
           return{ ...state,
               profile:action.profile
           };
        default:
            return state;
    }
};
export const addPostActionCreator=()=>{

    return{
        type: ADD_POST
    }
};
export const UpdateNewPostTextActionCreator=(text)=>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    }
};
export const  setUserProfile=(profile) =>{
    return{
        type:SET_USER_PROFILE,
        profile
    }
};
export const getProfile=(userId)=>{
    return (dispatch)=>{
        ProfileAPI.getProfile(userId)
            .then(data => {

                dispatch(setUserProfile(data));
            });
    }
};
export default profileReducer;