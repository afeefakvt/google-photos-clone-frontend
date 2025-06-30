import api from "./axiosInstance";
import type { Photo } from "./photos";

export interface Album{
    _id:string;
    title:string;
    description?:string;
    photos:string[];
    createdAt:string;
    coverUrl:string | null;
}

export const createAlbum = async (title:string,description?:string)=>{
    try {
        const response = await api.post<Album>('/albums/create',{title,description})
        return response.data
    } catch (error:any) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}

export const getUserAlbums = async()=>{
    try {
        const response = await api.get<Album[]>('/albums');
        return response.data
    } catch (error:any) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}

export const addPhotoToAlbum = async(albumId:string,photoId:string)=>{
    try {
        const response = await api.post(`/albums/${albumId}/addPhoto`,{photoId})
        return response.data;
    } catch (error:any) {
         const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}

export const getPhotosInAlbum = async(albumId:string)=>{
    try {        
        const response = await api.get<{album:Album,photos:Photo[]}>(`/albums/${albumId}/photos`)        
        return response.data
    } catch (error:any) {
         const message = error.response?.data?.message || error.message || 'Login failed';
        throw new Error(message);
    }
}