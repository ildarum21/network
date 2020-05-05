import * as axios from "axios";

const baseUrl ='https://social-network.samuraijs.com/api/1.0/';


const instance =axios.create({
    withCredentials: true,
    headers:{
        "API-KEY":"c729e806-bc2f-47b9-a24b-a121839f687b"},
    baseURL:baseUrl
});
export const UserAPI={
    getUsers(currentPage,pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    setUnfollow(id){
        return instance.post(`follow/${id}`)
            .then(response=>{
                return response.data;
            })
    },
    setFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response=>{

                return response.data;
            })
    }


};
export const AuthAPI={
    AuthMe(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
};
export const ProfileAPI={
    getProfile(id){
        return instance.get(`profile/${ id}`)
            .then(response => {
                return response.data;
            })
    }
};
