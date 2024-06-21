import { api } from "./config";

export async function unSubscribe(id){
    try {
        const {data} = await api.delete(`/user/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}