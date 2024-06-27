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

export async function addFavouriteRecipe(id) {
  try {
    const {data} = await api.post(`/favourite`, id, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log(error.message)
  }
}

export async function deleteFavouriteRecipe(id) {
  try {
    const {data} = await api.delete(`/favourite/${id}`, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log(error.message)
  }
}