import { useGetUserDetail, useGetUsers } from '@/api/requests'
import NotFound from '@/components/ui/404'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$userId')({
  component: UserDetail,
  notFoundComponent: NotFound,
})

function UserDetail() {
  const { userId } = Route.useParams()
  const { isLoading, error, data } = useGetUserDetail(userId)

  if (isLoading) return <p>Loading...</p>

  if (error) {
    console.log('error', error)
    return <p>Error fetching data</p>
  }

  return (
    <div className='p-4'>
      <div className='flex flex-col'>
        <h1 className='text-2xl'>User Detail</h1>
        <pre className='max-w-2xl text-wrap'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
