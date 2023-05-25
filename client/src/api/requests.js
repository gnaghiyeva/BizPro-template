import { BASE_URL } from "./base_url";
import axios from 'axios'
export const getAllModels = async()=>{
    let globalData;
   await axios.get(`${BASE_URL}/bizPro`).then((res)=>{
    globalData=res.data
   })
   return globalData;
}

export const getModelById = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/bizPro/${id}`).then((res)=>{
        globalData=res.data
    })
    return globalData
}

export const deleteModel = async(id)=>{
   let deletedModel
    deletedModel= await axios.delete(`${BASE_URL}/bizPro/${id}`).then((res)=>{
        deletedModel=res.data
    })
    return deletedModel
}

export const editModel = async(id,updatedModel)=>{
   await axios.put(`${BASE_URL}/bizPro/${id}`,updatedModel)
}

export const postModel = async(newModel)=>{
    await axios.post(`${BASE_URL}/bizPro`,newModel)
}