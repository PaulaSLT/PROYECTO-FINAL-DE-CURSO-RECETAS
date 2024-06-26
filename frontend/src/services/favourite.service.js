import { api } from "./config";


export async function getFavourites() {
    try {
        const { data } = await api.get("/favourite",
        {
        headers: {
            authorization: localStorage.getItem('token')
            }
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}