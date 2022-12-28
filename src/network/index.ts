import axios from 'axios'
import { SERVER_HOST } from '@/config'
import router from '@/router'
import Storage from '@/util/Storage'

const instance = axios.create({
  baseURL: SERVER_HOST,
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    if (!['/admin/login', '/admin/reset'].includes(config.url ?? '')) {
      config.headers = {
        ...config.headers,
        Authorization: Storage.get('token') ?? '',
      }
    }
    return config
  },
  async error => await Promise.reject(error)
)

instance.interceptors.response.use(
  result => {
    if (result.data.code === 40000) {
      setTimeout(() => {
        void router.push('/login')
      }, 1500)
    }
    return result
  },
  async error => await Promise.reject(error)
)

export default instance
