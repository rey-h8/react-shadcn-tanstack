import { AxiosResponse } from 'axios'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getEnv(variable: string): string {
	if (!variable) return ''
	return import.meta.env[variable]
}

export function withRetry(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	request: () => Promise<AxiosResponse<any, any> | undefined>,
	maxRetries = 3,
	useBackoffDelay = true,
) {
	let retryCount = 0
	const getBackoffDelay = (retryCount: number) => 2 ** retryCount * 1000

	if (retryCount < maxRetries) {
		retryCount++
		const delay = useBackoffDelay ? getBackoffDelay(retryCount) : 0

		setTimeout(async () => {
			request()
		}, delay)
	}
}
