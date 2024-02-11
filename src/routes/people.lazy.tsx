import { useGetPeople } from '@/api/requests.swapi'
import { columns } from '@/pages/people/columns'
import { DataTable } from '@/pages/people/data-table'
import { createLazyFileRoute } from '@tanstack/react-router'

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

  if (data?.length) {
    return (
      <div className='container mx-auto py-10 max-w-full'>
        <DataTable columns={columns} data={data} />
      </div>
    )
  }
}
