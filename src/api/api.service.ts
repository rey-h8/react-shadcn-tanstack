import { getEnv, withRetry } from '@/lib/utils'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log(BASE_URL)

const api = axios.create({ baseURL: BASE_URL })

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401) {
      const retryRefreshToken = async () => {
        try {
          const refreshTokenResponse = await axios.post('/refresh-token')
          const newAccessToken = refreshTokenResponse.data.accessToken

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

          return axios(originalRequest)
        } catch (error) {
          if (!getEnv('PROD')) {
            console.error('Error refreshing token:', error)
          }
          // Redirect to login or display error message
        }
      }

      withRetry(retryRefreshToken)
    }

    return Promise.reject(error)
  },
)

export default api
