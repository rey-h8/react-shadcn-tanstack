import { useGetPeopleDetail } from '@/api/requests.swapi'
import NotFound from '@/components/ui/404'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people/$id')({
  component: PeopleDetail,
  notFoundComponent: NotFound,
})

function PeopleDetail() {
  const { id } = Route.useParams()
  const { isLoading, error, data } = useGetPeopleDetail(+id)
  if (isLoading) return <p>Loading...</p>
  if (error) {
    console.log('error', error)
    return <p>Error fetching data</p>
  }
  return (
    <div className='p-4'>
      <div className='flex flex-col'>
        <h1 className='text-2xl'>Character Detail</h1>
        <pre className='max-w-2xl text-wrap'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
