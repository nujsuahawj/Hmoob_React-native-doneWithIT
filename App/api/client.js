import { create } from 'apisauce'
import {storeDataToStorage, detDataFromStorage} from '../utils/AsyncStorageFun'

export const apiClient = create({
    baseURL: 'http://localhost:9000/api',
})


const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig)
    if(response.ok){
        storeDataToStorage(url, response.data);
        return response;
    }

    const data = await detDataFromStorage(url)

    return data ? {ok: true, data} : response
}