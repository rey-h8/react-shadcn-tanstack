import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '../../components/ui/data-tables/data-table-view-options'

import {
  DataTableFacetedFilter,
  DataTableFacetedFilterProps,
} from '@/components/ui/data-tables/data-table-faceted-filter'
import React, { useCallback } from 'react'
// import { priorities, statuses } from '../data/data'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  placeholder: string
}

export function DataTableToolbar<TData>({
  table,
  placeholder,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      table.getColumn('name')?.setFilterValue(event.target.value)
    },
    [table.getColumn],
  )

  function getColumnUniqueValues(columnName: string): {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[] {
    const column = table.getColumn(columnName)

    const facets = column?.getFacetedUniqueValues()

    let facetsArray: [string, number][] = []

    if (facets) {
      facetsArray = Array.from(facets)
    }

    return facetsArray
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((x) => ({ label: x[0], value: x[0] }))
  }

  const hairColors = React.useMemo(
    () => getColumnUniqueValues('hair_color'),
    [],
  )
  const skinColors = React.useMemo(
    () => getColumnUniqueValues('skin_color'),
    [],
  )
  const eyeColors = React.useMemo(() => getColumnUniqueValues('eye_color'), [])

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder={placeholder}
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={onFilterChange}
          className='h-8 w-[150px] lg:w-[250px]'
        />
        {table.getColumn('hair_color') && (
          <DataTableFacetedFilter
            column={table.getColumn('hair_color')}
            title='Hair Color'
            options={hairColors}
          />
        )}
        {table.getColumn('skin_color') && (
          <DataTableFacetedFilter
            column={table.getColumn('skin_color')}
            title='Skin Color'
            options={skinColors}
          />
        )}
        {table.getColumn('eye_color') && (
          <DataTableFacetedFilter
            column={table.getColumn('eye_color')}
            title='Eye Color'
            options={eyeColors}
          />
        )}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
