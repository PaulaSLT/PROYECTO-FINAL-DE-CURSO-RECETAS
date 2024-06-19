import { apiRecetas } from './config'


export async function getRecipesByArea (area){
    try {
      const { data } = await apiRecetas.get(`/filter.php?a=${area}`);  
    
      return data.meals
    } catch (error) {
        console.log(error)
    }
} 