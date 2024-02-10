import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
  getFilmsEndpoint,
  getPeopleDetailEndpoint,
  getPeopleEndpoint,
} from './endpoints.swapi'

const SWAPI_BASE_URL = import.meta.env.VITE_SWAPI_BASE_URL
const api = axios.create({ baseURL: SWAPI_BASE_URL })

export type Film = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: Date
  edited: Date
  url: string
}

export type Person = {
  id: number
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

const getFilms = async () => {
  const result = await api.get(getFilmsEndpoint())
  return result.data.results
}

export const useGetFilms = () => {
  return useQuery<Film[]>({
    queryKey: ['films'],
    queryFn: getFilms,
  })
}

const getPeople = async () => {
  const result = await api.get(getPeopleEndpoint())
  return result.data.results
}

export const useGetPeople = () => {
  return useQuery<Person[]>({
    queryKey: ['people'],
    queryFn: getPeople,
  })
}

const getPeopleDetail = async (id: number) => {
  const result = await api.get(getPeopleDetailEndpoint(id))
  return result.data
}

export const useGetPeopleDetail = (id: number) => {
  return useQuery<Person[]>({
    queryKey: ['people', id],
    queryFn: () => getPeopleDetail(id),
  })
}
