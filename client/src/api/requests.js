import { BASE_URL } from "./base_url";
import axios from 'axios'
// export const getAllModels = async()=>{
//     let globalData;
//    await axios.get(`${BASE_URL}/bizPro`).then((res)=>{
//     globalData=res.data
//    })
//    return globalData;
// }

export const getAllModels = async(name)=>{
    let globalData;
    let URL;
    if(!name){
        URL=BASE_URL+"/bizPro"
    }
    else{
        URL=BASE_URL+"/bizPro/"+`?name=${name}`
    }

    await axios.get(URL).then((res)=>{
        globalData=res.data
    })
    return globalData
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
    await axios.delete(`${BASE_URL}/bizPro/${id}`).then((res)=>{
        deletedModel=res.data
    })
    return deletedModel
}

export const editModel = (id,updatedModel)=>{
   axios.put(`${BASE_URL}/bizPro/${id}`,updatedModel)
}

export const postModel = (newModel)=>{
    axios.post(`${BASE_URL}/bizPro`,newModel)
}