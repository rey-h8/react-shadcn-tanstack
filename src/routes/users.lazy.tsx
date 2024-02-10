import { useGetUsers } from '@/api/requests'
import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/users')({
  component: Users,
})

function Users() {
  const { isLoading, error, data } = useGetUsers()

  if (isLoading) return <p>Loading...</p>

  if (error) {
    console.log('error', error)
    return <p>Error fetching data</p>
  }

  return (
    <div className=''>
      <div className='flex flex-row'>
        <div className='flex flex-col gap-2 p-4 min-h-screen border-r-2'>
          {data?.map((user) => {
            return (
              <div key={user.id} className=''>
                <Link to={`${user.id}`}>
                  <p>{user.name}</p>
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
