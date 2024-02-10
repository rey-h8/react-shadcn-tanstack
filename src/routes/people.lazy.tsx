import { useGetPeople } from '@/api/requests.swapi'
import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router'
import slugify from 'slugify'

export const Route = createLazyFileRoute('/people')({
  component: People,
})

function People() {
  const { isLoading, error, data } = useGetPeople()

  if (isLoading) return <p>Loading...</p>

  if (error) {
    console.log('error', error)
    return <p>Error fetching data</p>
  }

  return (
    <div className=''>
      <div className='flex flex-row max-w-xl'>
        <div className='flex flex-col gap-2 p-4 min-h-screen border-r-2'>
          {data?.map((person) => {
            return (
              <div key={person.name}>
                <Link to={`${person.url.split('/').slice(-2, -1)}`}>
                  <p>{person.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <Outlet />
      </div>
    </div>
  )
}
