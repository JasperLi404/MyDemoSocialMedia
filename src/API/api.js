import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6218fa8f-9964-4e58-a8a6-4824b7900c49"
    }
})
export const UsersAPI = {
    getUsers (currentPage = 1, pageSize = 4){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }

}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{ 'status' : status })
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append("image",photoFile);

        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
} 

export const AuthAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}
export const SecurityAPI = {
    getCaptchaURL(){
        return instance.get(`security/get-captcha-url`)
    }
    
}