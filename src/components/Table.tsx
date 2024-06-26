import { Fragment, useState } from 'react'
import clsx from 'clsx'

import { Loading } from './Loading'
import { ChevronDown, CircleAlert } from 'lucide-react'
import Tooltips from './Tooltip'
import { useSelector } from 'react-redux'
import { getModeSlice } from '@/store/reducer/stateMode'
import { NoData } from './NoData'
import { useSearch } from '@/libs/hooks/useSearch'

export type Column<T> = {
  header: string
  info?: string
  key?: string | number
  renderCell?: (rowData: T) => React.ReactNode
  width?: string
}

type Props<T, P> = {
  data: T[]
  columns: Column<T>[] | ((props: P) => Column<T>[])
  containerClasses?: string
  maxHeight?: string
  loading?: boolean
  columnProps?: P
  onItemClick?: (rowData: T) => void
  collapseComponent?: React.ReactNode
}

export function Table<T, P>({
  data,
  columns,
  containerClasses = '',
  maxHeight = 'max-h-[60vh]',
  loading,
  columnProps,
  onItemClick,
  collapseComponent,
}: Props<T, P>) {
  const mode = useSelector(getModeSlice)
  const { currentPage } = useSearch()
  const [rowIsOpen, setRowIsOpen] = useState<number | null>(null)

  const columnArray =
    typeof columns === 'function' ? columns(columnProps as P) : columns

  return (
    <div className={`rounded-3xl p-32 ${containerClasses}`}>
      {/* ----- Loading UI ----- */}
      {loading ? (
        <Loading width="6.4rem" height="6.4rem" />
      ) : (
        <div
          className={`scrollbar flex flex-col overflow-auto ${maxHeight}`}
          style={{ scrollbarGutter: 'stable' }}
        >
          {/* ----- No Data/Fallback UI ----- */}
          {!data || data.length === 0 ? (
            <NoData />
          ) : (
            <table className="flex-1 border-collapse text-[2rem]">
              <thead className="relative z-10 align-top leading-medium">
                <tr className="border-b-[3rem] border-transparent">
                  {/* ----- Header Checkbox ----- */}
                  <th
                    className={`sticky top-0 pb-24 text-left ${mode.isLight ? 'bg-white' : 'bg-dark-tint-2'}`}
                  >
                    No
                  </th>

                  {/* ----- Table Headers ----- */}
                  {columnArray.map((column, colIndex) => (
                    <th
                      className={`sticky top-0 pb-24 ${column.width} ${mode.isLight ? 'bg-white' : 'bg-dark-tint-2'}`}
                      key={column.key || colIndex.toString()}
                    >
                      <div className="flex items-start justify-start gap-x-12">
                        <span>{column.header}</span>
                        <Tooltips
                          triggerComponent={<CircleAlert size={12} />}
                          tooltipContent={<span>{column.info}</span>}
                        />
                      </div>
                    </th>
                  ))}

                  {/* ----- Detail Header ----- */}
                  {collapseComponent && (
                    <th className="sticky right-0 top-0 bg-white p-16 text-left">
                      <span className="shadow-[-2.4rem_0_0.4rem_rgb(255,255,255)]">
                        Detail
                      </span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <tr
                      className={clsx(
                        'border-b-[3rem] border-transparent transition-all ease-in hover:cursor-pointer',
                        {
                          'cursor-pointer': onItemClick,
                          'hover:bg-neutral-100':
                            onItemClick && !collapseComponent,
                        },
                        {
                          'hover:bg-surface-disabled hover:text-black':
                            mode.isLight,
                          'hover:bg-dark-tint-1 hover:text-background':
                            !mode.isLight,
                        },
                      )}
                      onClick={onItemClick ? () => onItemClick(row) : undefined}
                    >
                      {/* ----- Body Checkbox ----- */}
                      <td className="p-4">
                        {currentPage * 100 - 100 + rowIndex + 1}
                      </td>

                      {/* ----- Table Data ----- */}
                      {columnArray.map((column, colIndex) => (
                        <td
                          className={`p-4 leading-medium ${column.width}`}
                          key={column.key || colIndex.toString()}
                        >
                          {column.renderCell
                            ? column.renderCell(row)
                            : (row[column.key as keyof T] as React.ReactNode) ||
                              '-'}
                        </td>
                      ))}

                      {/* ----- Collapse Trigger ----- */}
                      {collapseComponent && (
                        <td className="sticky right-0 bg-white p-16">
                          <div className="shadow-[-2.4rem_0_0.4rem_rgb(255,255,255)]">
                            <button
                              className="rounded-full p-4 transition-all ease-in hover:bg-neutral-100"
                              onClick={() => {
                                if (rowIsOpen === rowIndex) {
                                  setRowIsOpen(null)
                                } else {
                                  setRowIsOpen(rowIndex)
                                }
                              }}
                            >
                              <ChevronDown
                                width={20}
                                height={20}
                                className={clsx('transition-all ease-in', {
                                  'rotate-180': rowIsOpen === rowIndex,
                                  'rotate-0': rowIsOpen !== rowIndex,
                                })}
                              />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>

                    {/* ----- Collapse Content ----- */}
                    {collapseComponent && (
                      <tr>
                        <td colSpan={1}>
                          <div
                            className={clsx(
                              'overflow-hidden border-b bg-neutral-100 bg-opacity-[0.15] px-8 transition-all ease-in',
                              {
                                'max-h-full translate-y-0 py-16 opacity-100':
                                  rowIsOpen === rowIndex,
                                'max-h-0 -translate-y-16 opacity-0':
                                  rowIsOpen !== rowIndex,
                              },
                            )}
                          >
                            {collapseComponent}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}
