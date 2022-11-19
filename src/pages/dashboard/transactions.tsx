import { Listbox, Transition } from '@headlessui/react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

import { Search } from '@/components/icons/search';
import TransactionTable from '@/components/transaction-table';
import { transactionsData } from '@/data/transactions-data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

// transaction table columns

export const COLUMNS = [
  {
    Header: 'Sender Id',
    accessor: 'senderId',
  },
  {
    Header: 'Receiver Id',
    accessor: 'receiverId',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: ({ cell: { value } }) => (
      <div className="flex w-fit items-center space-x-2">
        <value.icon />
        <span className="text-sm">{value.value}</span>
      </div>
    ),
  },
  {
    Header: 'Bridge Used',
    accessor: 'bridgeUsed',
  },
  {
    Header: 'From Token',
    accessor: 'fromToken',
    Cell: ({ cell: { value } }) => (
      <div>
        <value.icon />
      </div>
    ),
  },
  {
    Header: 'To Token',
    accessor: 'toToken',
    Cell: ({ cell: { value } }) => (
      <div>
        <value.icon />
      </div>
    ),
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ cell: { value } }) => (
      <div
        className={`flex w-fit items-center space-x-1 rounded-full px-2 py-1 text-center text-body ${
          value.name === 'Success' ? 'bg-green-500' : 'bg-yellow-500'
        }`}
      >
        <value.icon className="h-4 w-4" />
        <span>{value.name}</span>
      </div>
    ),
  },
];

const sort = [
  { id: 1, name: 'Recently Added' },
  { id: 2, name: 'Pending' },
  { id: 3, name: 'Success' },
];

function SortList() {
  const [selectedItem, setSelectedItem] = useState(sort[0]);

  return (
    <div className="relative w-full md:w-auto">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex h-11 w-full items-center justify-between space-x-2 rounded-lg border border-[#181818] bg-body px-4 text-sm">
          <Bars3CenterLeftIcon className="h-5 w-5" />
          <span className="w-full text-left font-medium">
            {selectedItem?.name}
          </span>
        </Listbox.Button>
        <Transition
          enter="ease-out duration-200"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 -translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Listbox.Options className="absolute left-0 z-30 mt-2 w-full origin-top-right rounded-lg border border-[#181818] bg-body p-3">
            {sort.map((item) => (
              <Listbox.Option key={item.id} value={item}>
                {({ selected }) => (
                  <div
                    className={`block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition  ${
                      selected
                        ? 'my-1 bg-gray-100 dark:bg-body'
                        : 'hover:text-brand-amber'
                    }`}
                  >
                    {item.name}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

const transactions: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold text-gray-200">
        Transactions
      </h1>
      <div className="mb-6 flex w-full items-center space-x-2">
        <div className="relative w-3/4 rounded-md shadow-sm sm:w-4/5">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search />
          </div>
          <input
            type="search"
            name="transactionSearch"
            placeholder="Search by User ID, Bridge used"
            className="w-full rounded-md border border-[#181818] bg-transparent py-3 pl-10 text-sm outline-none placeholder:text-[#464646] focus:border-brand-amber focus:outline-none focus:ring-0 sm:rounded-lg"
          />
        </div>
        <div className="w-1/4 sm:w-1/5">
          <SortList />
        </div>
      </div>

      {/* table starts */}
      <TransactionTable tableColumns={COLUMNS} tableData={transactionsData} />
    </>
  );
};

transactions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default transactions;
