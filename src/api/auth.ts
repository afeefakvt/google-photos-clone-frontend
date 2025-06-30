import api from "./axiosInstance";

export interface AuthResponse{
    access_token : string;
}

export const loginUser = async(email:string,password:string)=>{
    try {   
        console.log(email,password);
             
        const response = await api.post<AuthResponse>('/auth/login',{email,password})
        console.log(response,"sddchdbjm")
        return response.data
    } catch (error:any) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
        
    }
}

export const registerUser = async(email:string,name:string,password:string)=>{
    try {
        const response = await api.post<AuthResponse>('/auth/register',{email,name,password})
        return response.data
    } catch (error:any) {
         const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }

}
