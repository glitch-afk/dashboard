import React from 'react';

import TransactionTable from '@/components/transaction-table';
import { manageKeysData } from '@/data/manage-keys-data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

const COLUMNS = [
  {
    Header: 'Key Name',
    accessor: 'keyName',
  },
  {
    Header: 'Public Key',
    accessor: 'publicKey',
  },
  {
    Header: 'Created On',
    accessor: 'createdOn',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ cell: { value } }) => (
      <div
        className={`text-white ${
          value === 'Active' ? 'text-green-500' : 'text-yellow-500'
        }`}
      >
        {value}
      </div>
    ),
  },
  {
    Header: '',
    accessor: 'keyOperations',
    Cell: ({ cell: { value } }) => (
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1">
        {/* status pill */}
        <button
          className={`flex w-fit items-center space-x-2 rounded-full bg-[#2F2F2F] px-2 py-[8px] text-xs ${
            value.statusKey.name === 'Activate'
              ? 'text-green-500'
              : 'text-yellow-500'
          }`}
        >
          <value.statusKey.icon className="h-4 w-4" />
          {value.statusKey.name}
        </button>
        {/* delete pill */}
        <button className="flex w-fit items-center space-x-2 rounded-full bg-[#2F2F2F] px-2 py-[8px] text-xs text-red-600">
          <value.deleteKey.icon className="h-4 w-4" />
          {value.deleteKey.name}
        </button>
      </div>
    ),
  },
];

const manageKeys: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-gray-200">Manage Keys</h1>
      <TransactionTable tableColumns={COLUMNS} tableData={manageKeysData} />
    </>
  );
};

manageKeys.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default manageKeys;
