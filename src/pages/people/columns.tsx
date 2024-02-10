import { Person } from '@/api/requests.swapi'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'height',
    header: 'Height',
  },
  {
    accessorKey: 'mass',
    header: 'Mass',
  },
  {
    accessorKey: 'birth_year',
    header: 'Birth Year',
  },
  {
    accessorKey: 'films',
    header: 'Films',
  },
]
