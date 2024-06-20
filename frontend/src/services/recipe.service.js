import { api } from './config'


export async function postRecipe(){
    try {
      const { data } = await api.post(`/recipe`);  
      return data
    } catch (error) {
        console.log(error)
    }
} 