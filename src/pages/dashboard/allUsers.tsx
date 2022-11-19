import { Listbox, Transition } from '@headlessui/react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

import { Search } from '@/components/icons/search';
import TransactionTable from '@/components/transaction-table';
import { allUsersData } from '@/data/all-user-data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

const sort = [
  { id: 1, name: 'Recently Added' },
  { id: 2, name: 'Volume (high to low)' },
  { id: 3, name: 'Volume (low to high)' },
  { id: 4, name: 'Transaction (low to high)' },
  { id: 5, name: 'Transaction (high to low)' },
];

function SortList() {
  const [selectedItem, setSelectedItem] = useState(sort[0]);

  return (
    <div className="relative w-full md:w-auto">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex h-11 w-full items-center justify-between space-x-2 rounded-lg border border-[#181818] bg-body px-4 text-sm">
          <Bars3CenterLeftIcon className="h-5 w-5" />
          <span className="w-full text-left text-xs font-medium md:text-sm">
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

const chainSort = [
  { id: 1, name: 'All Chains' },
  { id: 2, name: 'Polygon' },
  { id: 3, name: 'Ethereum' },
  { id: 4, name: 'Binance' },
  { id: 5, name: 'Optimism' },
];

function ChainSortList() {
  const [selectedItem, setSelectedItem] = useState(chainSort[0]);

  return (
    <div className="relative w-full md:w-auto">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex h-11 w-full items-center justify-between space-x-2 rounded-lg border border-[#181818] bg-body px-4 text-sm">
          <Bars3CenterLeftIcon className="h-5 w-5" />
          <span className="w-full text-left text-xs font-medium md:text-sm">
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
            {chainSort.map((item) => (
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

const COLUMNS = [
  {
    Header: 'Sr no.',
    accessor: 'index',
  },
  {
    Header: 'User ID',
    accessor: 'userId',
  },
  {
    Header: 'Total Volume',
    accessor: 'totalVolumeDone',
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center space-x-1">
        <value.icon />
        <span className="text-sm sm:text-base">{value.name}</span>
      </div>
    ),
  },
  {
    Header: 'Total Transactions',
    accessor: 'totalTransaction',
  },
  {
    Header: 'Default Chain',
    accessor: 'defaultChain',
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center space-x-1">
        <value.icon />
        <span className="text-sm sm:text-base">{value.name}</span>
      </div>
    ),
  },
];

const allUsers: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold text-gray-200">All Users</h1>
      <div className="mb-6 flex w-full items-center space-x-2">
        <div className="relative w-2/4 rounded-md shadow-sm sm:w-3/5">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search />
          </div>
          <input
            type="search"
            name="transactionSearch"
            placeholder="Search by User ID"
            className="w-full rounded-md border border-[#181818] bg-transparent py-3 pl-10 text-sm outline-none placeholder:text-[#464646] focus:border-brand-amber focus:outline-none focus:ring-0 sm:rounded-lg"
          />
        </div>
        <div className="w-1/4 sm:w-1/5">
          <SortList />
        </div>
        <div className="w-1/4 sm:w-1/5">
          <ChainSortList />
        </div>
      </div>

      {/* all users table */}
      <TransactionTable tableColumns={COLUMNS} tableData={allUsersData} />
    </>
  );
};

allUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default allUsers;
