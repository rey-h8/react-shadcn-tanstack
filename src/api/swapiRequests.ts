import { useQuery } from '@tanstack/react-query'
import api from './api.service'
import { FILMS_ENDPOINT } from './endpoints'

const getFilms = async () => {
	const result = await api.get(FILMS_ENDPOINT)
	return result.data.results
}

export const useGetFilms = () => {
	return useQuery({
		queryKey: ['films'],
		queryFn: getFilms,
	})
}
