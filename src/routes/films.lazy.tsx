import { useGetFilms } from '@/api/swapiRequests'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/films')({
	component: Films,
})

function Films() {
	const data = useGetFilms()
	return (
		<>
			<div className='p-2'>Hello from Films!</div>
			<pre className='mt-12 max-w-2xl'>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}
