import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
})

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  result => result,
  error => Promise.reject(error)
)

export default instance
