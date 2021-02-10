import axios from "axios";
import { follow } from "../redux/users-reducer";


const instance = axios.create(
    { 
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
            "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
        }
    }
);

export const usersAPI = {

    getUsers:(currentPage,pageSize) => {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response)=>{ return response.data;});
    },

    follow(userId){
        return  instance.post('follow/'+userId)
        .then((response)=>{ return response.data;});

    },
    unfollow(userId){
        return instance.delete('follow/'+userId)
        .then((response)=>{ return response.data;});
        
    

    },
}

