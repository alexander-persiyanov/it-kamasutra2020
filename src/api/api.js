import axios from "axios";



const instance = axios.create(
    { 
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
            "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
        }
    }
);

export const authAPI = {
    me:()=>{
        return instance.get('/auth/me').then((response)=>{
            return response.data;
        });
    },
    login:(email,password,rememberMe=false)=>{
        return instance.post('/auth/login',{email:email,password:password,rememberMe:rememberMe}).then((response)=>{
           
            return response.data;
        });
    },
    logout:()=>{
        return instance.delete('/auth/login').then((response)=>{
           return response.data;
        });
    }

};

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
    getProfileData(userId){
        console.warn('Obsolete method.Please profileAPI object.');
        return profileAPI.getProfileData(userId);
    }
   
   
}
export const profileAPI = {

    getProfileData(userId){
        return instance.get('profile/'+userId)
        .then((response)=>{ return response.data;});
    },

    updateStatus(status){
        return instance.put('profile/status',{status:status})
        .then((response)=>{ return response.data;});
    },
    
    getStatus(userId){
        return instance.get('profile/status/'+userId)
        .then((response)=>{ return response.data;});
    },

    savePhoto(photoFile){
        const  formData = new FormData();
        formData.append("image",photoFile);
        return instance.put('profile/photo',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((response)=>{ return response.data;});
    }
}

