import axios from 'axios';

export const api = axios.create({
    baseURL:"http://localhost:41220",
    headers: { "Content-Type": "application/json; charset=UTF-8" }
})