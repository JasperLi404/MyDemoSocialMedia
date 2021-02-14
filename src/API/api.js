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

export const AuthAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}