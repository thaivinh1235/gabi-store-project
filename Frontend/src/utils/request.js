// https://github.com/axios/axios#creating-an-instance

import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8000/'
})

// apiPath : đường dẫn URL `users/search` 
// options: params (ko bắt buộc)
export const get  = async (apiPath, options = {}) => { 
    const response = await request.get(apiPath, options)
    return response.data
}

export default request