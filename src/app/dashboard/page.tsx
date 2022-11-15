import React from 'react';

import OverviewChart from '@/components/OverviewChart';

const overviewPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-200">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 mb-12">
        <div className="dashboardCard sm:col-span-4 p-3 rounded-lg lg:col-span-2">
          <span className="text-xs font-medium">Total no. of users</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
        <div className="dashboardCard sm:col-span-4 p-3 rounded-lg lg:col-span-2">
          <span className="text-xs font-medium">Total Volume</span>
          <div className="flex items-baseline space-x-1">
            <h2 className="text-2xl font-bold">1000</h2>
            <span className="text-xs text-gray-400">USDC</span>
          </div>
        </div>
        <div className="dashboardCard sm:col-span-4 p-3 rounded-lg lg:col-span-2">
          <span className="text-xs font-medium">Total no. of transaction</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
        <div className="dashboardCard sm:col-span-4 p-3 rounded-lg lg:col-span-2">
          <span className="text-xs font-medium">Total no. of users</span>
          <h2 className="text-2xl font-bold">1000</h2>
        </div>
      </div>
      {/* charts */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OverviewChart />
        <OverviewChart />
      </div>
    </>
  );
};

export default overviewPage;
