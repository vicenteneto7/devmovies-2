import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5a222ce571bb89c96b30c10afda7b5f2',
        language: 'pt/BR',
        page: 1
    }
})