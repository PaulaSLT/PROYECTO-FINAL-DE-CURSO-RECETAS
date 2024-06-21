<<<<<<< HEAD
import { api } from "./config";

export async function unSubscribe(id){
    try {
        const {data} = await api.delete(`/user/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
=======
import { api } from"./config";
export async function getMyProfileContext() {
  try {
    const { data } = await api.get("/user/myprofile", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
>>>>>>> RecipesView
}