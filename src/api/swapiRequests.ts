import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getFilmsEndpoint } from './endpoints.swapi'

const SWAPI_BASE_URL = import.meta.env.VITE_SWAPI_BASE_URL
const api = axios.create({ baseURL: SWAPI_BASE_URL })

const getFilms = async () => {
  const result = await api.get(getFilmsEndpoint())
  return result.data.results
}

export const useGetFilms = () => {
  return useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
  })
}
