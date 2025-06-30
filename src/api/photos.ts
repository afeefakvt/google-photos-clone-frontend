import api from "./axiosInstance";

export interface Photo{
    _id:string;
    url:string;
    public_id:string;
    createdAt:string;
    metadata?:{
        width?:number;
        height?:number;
        size?:number;
        format?:string;
    };
}

export const uploadPhoto = async(formData:FormData)=>{
    try {
        const response = await api.post<Photo>('/photos/upload',formData,{
            headers:{'Content-Type':'multipart/form-data'}
        });
        return response.data
    } catch (error:any) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}
export const getUserPhotos = async()=>{
    try {
        const response = await api.get<Photo[]>('photos')
        return response.data
    } catch (error:any) {
         const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}
export const getPhotoById = async(photoId:string)=>{
    try {
        const response = await api.get<Photo>(`/photos/${photoId}`)
        return response.data
    } catch (error:any) {
         const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}

export const searchPhotos = async(query:Record<string,string | number>)=>{
    try {
        const response = await api.get<Photo[]>('/photos/search',{params:query})
        return response.data
    } catch (error:any) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message); 
    }
}