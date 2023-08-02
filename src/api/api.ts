import axios from "axios";
import {ProfilePhotos} from "../redux/reducers/profile-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "1abf02da-1f01-4a57-9e95-d7c2e3ba6948"
  }
})

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`, {
      withCredentials: true
    }).then(response => response.data)
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  follow(id: number) {
    return instance.post(`follow/${id}`).then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId = "2") {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },
  getAuth() {
    return instance.get('auth/me', {withCredentials: true}).then(response => response.data)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`).then(res => res.data)
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status`, {status}).then(response => response.data)
  },
  saveProfileFile(file:FormData){
    return instance.put<ResponseDataType<{photos:ProfilePhotos}>>(`/profile/photo`, file).then(response => response.data)
  },
  login(data: loginDataType) {
    return instance.post('/auth/login', {...data}).then(res => res.data)
  },
  logout() {
    return instance.delete('/auth/login').then(res => res.data)
  }
}

export type loginDataType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: boolean
}
type ResponseDataType<D> ={
  resultCode: number
  messages: string[],
  data: D
}