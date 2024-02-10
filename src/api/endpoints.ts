enum ApiEndpoints {
	Films = 'films',
}

export const BASE_URL = import.meta.env.VITE_API_BASE_URL
export const FILMS_ENDPOINT = `${BASE_URL + ApiEndpoints.Films}/`
