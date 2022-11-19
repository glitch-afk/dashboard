import { Listbox, Transition } from '@headlessui/react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

import { Search } from '@/components/icons/search';
import TransactionTable from '@/components/transaction-table';
import Button from '@/components/ui/button';
import { nftContractData } from '@/data/nft-contract-data';
import Layout from '@/layouts/_dashboard';
import type { NextPageWithLayout } from '@/types';

const COLUMNS = [
  {
    Header: 'Contract Address',
    accessor: 'contractAddress',
  },
  {
    Header: 'NFT Name',
    accessor: 'nftName',
  },
  {
    Header: 'Collection Name',
    accessor: 'collectionName',
  },
  {
    Header: 'NFTs Minted',
    accessor: 'nftsMinted',
  },
  {
    Header: 'NFTs Image',
    accessor: 'nftsImage',
  },
  {
    Header: 'NFT Symbol',
    accessor: 'nftSymbol',
  },
  {
    Header: 'List of chains',
    accessor: 'listOfChains',
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center">
        <value.icon />
      </div>
    ),
  },
];

const sort = [
  { id: 1, name: "NFT's minted (low to high)" },
  { id: 2, name: "NFT's minted (high to low)" },
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

const nftContracts: NextPageWithLayout = () => {
  return (
    <>
      <div className="mb-4 flex w-full justify-between">
        <h1 className="text-2xl font-semibold text-gray-200">NFT Contracts</h1>
        <Button
          shape="pill"
          color="primary"
          variant="solid"
          size="mini"
          className="text-xs"
        >
          + Create NFT
        </Button>
      </div>
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
      {/* nft table */}
      <TransactionTable tableColumns={COLUMNS} tableData={nftContractData} />
    </>
  );
};

nftContracts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default nftContracts;
