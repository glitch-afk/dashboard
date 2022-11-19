import React, { useEffect } from 'react';

import OverviewChart from '@/components/OverviewChart';
import TransactionTable from '@/components/transaction-table';
import { transactionsData } from '@/data/transactions-data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

import { COLUMNS } from './transactions';
import router from 'next/router';
import { useSession } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const DashboardIndex: NextPageWithLayout = () => {
  const {session, currentLink, setCurrentLink} = useSession()
  const nvavigate = useRouter()


  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold text-gray-200">Overview</h1>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-8">
        <div className="dashboardCard rounded-lg p-3 sm:col-span-4 lg:col-span-2">
          <span className="text-xs font-medium">Total no. of users</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
        <div className="dashboardCard rounded-lg p-3 sm:col-span-4 lg:col-span-2">
          <span className="text-xs font-medium">Total Volume</span>
          <div className="flex items-baseline space-x-1">
            <h2 className="text-2xl font-bold">1000</h2>
            <span className="text-xs text-gray-400">USDC</span>
          </div>
        </div>
        <div className="dashboardCard rounded-lg p-3 sm:col-span-4 lg:col-span-2">
          <span className="text-xs font-medium">Total no. of transaction</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
        <div className="dashboardCard rounded-lg p-3 sm:col-span-4 lg:col-span-2">
          <span className="text-xs font-medium">Total no. of users</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
      </div>
      {/* charts */}
      <div className="mb-12 grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <OverviewChart />
        <OverviewChart />
      </div>
      {/* table */}
      <TransactionTable tableColumns={COLUMNS} tableData={transactionsData} />
    </>
  );
};

DashboardIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardIndex;
