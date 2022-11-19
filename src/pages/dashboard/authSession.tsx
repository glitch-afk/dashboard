import React from 'react';

import { Search } from '@/components/icons/search';
import TransactionTable from '@/components/transaction-table';
import { authenticationData } from '@/data/authentication-session.data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

const COLUMNS = [
  {
    Header: 'User ID',
    accessor: 'userId',
  },
  {
    Header: 'Dapp ID',
    accessor: 'dappId',
  },
  {
    Header: 'Session Duration',
    accessor: 'sessionDuration',
  },
  {
    Header: 'Transactioons Done',
    accessor: 'transactionsDone',
  },
  {
    Header: 'Volume Done',
    accessor: 'volumeDone',
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center space-x-1">
        <value.icon />
        <span className="text-sm sm:text-base">{value.volume}</span>
      </div>
    ),
  },
];

const authSession: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold text-gray-200">
        Authentication Session
      </h1>
      <div className="mb-6 flex w-full items-center space-x-2">
        <div className="relative w-full rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search />
          </div>
          <input
            type="search"
            name="transactionSearch"
            placeholder="Search by User ID, Dapp ID"
            className="w-full rounded-md border border-[#181818] bg-transparent py-3 pl-10 text-sm outline-none placeholder:text-[#464646] focus:border-brand-amber focus:outline-none focus:ring-0 sm:rounded-lg"
          />
        </div>
      </div>
      <TransactionTable tableColumns={COLUMNS} tableData={authenticationData} />
    </>
  );
};

authSession.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default authSession;
