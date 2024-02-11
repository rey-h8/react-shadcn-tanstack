import { Person } from '@/api/requests.swapi'
import { DataTableColumnHeader } from '@/components/ui/data-tables/data-table-column-header'
import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Person>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
  },
  {
    id: 'height',
    accessorFn: (row) => +row.height,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Height' />
    ),
    footer: (props) => {
      console.log('props', props)
      return props.column.id
    },
  },
  {
    id: 'mass',
    accessorFn: (row) => +row.mass,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Mass' />
    ),
  },
  {
    accessorKey: 'hair_color',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Hair Color' />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'skin_color',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Skin Color' />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'eye_color',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Eye Color' />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
