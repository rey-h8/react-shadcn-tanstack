import { useGetFilms } from '@/api/requests.swapi'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/films')({
  component: Films,
})

function Films() {
  const { isLoading, error, data } = useGetFilms()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error fetching data</p>

  return (
    <>
      <h1>Films</h1>
      <pre className='max-w-2xl text-wrap'>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
