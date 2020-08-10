import * as axios from 'axios'
import { follow } from '../redux/users-reducer';

const instance = axios.create({
    withCredentials: true,
    baseUrl: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "fe6f12f5-9c4c-4d66-bf2b-1ef8db1d17f9" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
 
    },
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
 
    },
    getStatus(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status/`, {status: status});
    }
}

export const authAPI = {
    me(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`);
    }
}
