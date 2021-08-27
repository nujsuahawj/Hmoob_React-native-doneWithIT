import { apiClient} from './client'

const loginEndpoint = '/auth';
const registerEndpoint ='/users'

export const Login = (email, password) => 
    apiClient.post(loginEndpoint, {email, password})


export const Register = (userInfo) => 
    apiClient.post(registerEndpoint, userInfo)