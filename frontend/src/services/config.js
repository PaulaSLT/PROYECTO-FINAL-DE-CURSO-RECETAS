import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
    
})

export const apiRecetas = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1'
});
