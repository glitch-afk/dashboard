/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import type { Column } from 'react-table';
import {
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from 'react-table';

import Scrollbar from './ui/scrollbar';

interface TableProps {
  tableData: Array<any>;
  tableColumns: Array<Column>;
}

const TransactionTable = ({ tableData, tableColumns }: TableProps) => {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo(() => tableColumns, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data,
      },
      useSortBy,
      useResizeColumns,
      useFlexLayout,
      usePagination
    );

  return (
    <div className="-mx-0.5">
      <Scrollbar style={{ width: '100%' }}>
        <table {...getTableProps()} className="transaction-table w-full">
          <thead className="text-sm text-gray-500 dark:text-gray-300">
            {headerGroups.map((headerGroup, idx) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={idx}
                className="mb-4 rounded-md bg-gradient-to-br from-[#181818] to-[#1f1f1f] sm:rounded-lg"
              >
                {headerGroup.headers.map((column, idx) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={idx}
                    className="group px-2 py-5 font-normal first:rounded-l-lg first:pl-8 last:pr-8 md:px-4"
                  >
                    <div className="flex items-center">
                      {column.render('Header')}

                      <span className="ml-1">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ChevronDownIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4 rotate-180" />
                          )
                        ) : (
                          <ChevronDownIcon className="h-4 w-4 rotate-180 opacity-0 transition group-hover:opacity-50" />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="text-xs font-medium 3xl:text-sm"
          >
            {page.map((row, idx) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={idx}
                  className="mb-3 items-center rounded-lg bg-[#0D0D0D] last:mb-0"
                >
                  {row.cells.map((cell, idx) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={idx}
                        className="px-2 py-4 tracking-[1px] first:pl-4 last:pr-4  md:px-4 md:py-6 md:first:pl-8 md:last:pr-8 3xl:py-5"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Scrollbar>
    </div>
  );
};

export default TransactionTable;
