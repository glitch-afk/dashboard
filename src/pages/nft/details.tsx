import React from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/form/input';
import Textarea from '@/components/ui/form/textarea';
import CustomSelect from '@/components/ui/Select';
import { gasOptions, ownersChains } from '@/data/mockData';
import AuthLayout from '@/layouts/_authLayout';
import type { NextPageWithLayout } from '@/types';

const nftDetails: NextPageWithLayout = () => {
  return (
    <div className="formShadow w-full p-4">
      <div>
        <h3 className="text-xl font-bold leading-6">Provider Details</h3>
        <p className="mt-1 text-sm text-gray-500">
          Please fill in the following details
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input placeholder="Enter collection name" label="Collection name" />
        </div>
        <div className="sm:col-span-3">
          <Input
            label="Collection Symbol"
            placeholder="Upload Symbol"
            type="file"
          />
        </div>
        <div className="sm:col-span-3">
          <Input
            placeholder="Upload Logo"
            label="Collection Logo"
            type="file"
          />
        </div>
        <div className="sm:col-span-3">
          <CustomSelect
            options={ownersChains}
            selectText="Select Chain"
            label="Select Owner's Chain"
          />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Upload NFT Image" type="file" label="NFT Image" />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Enter NFT name" label="NFT Name" />
        </div>
        <div className="sm:col-span-6">
          <Textarea
            placeholder="Describe your awesome NFT"
            label="NFT Description"
          />
        </div>
        <div className="sm:col-span-6">
          <label className="text-base font-medium ">User should pay gas</label>

          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="flex items-center space-x-10">
              {gasOptions.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={option.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={option.id === 'yes'}
                    className="peer h-4 w-4 border-none text-amber-600 focus:border-none focus:outline-none focus:ring-0 focus:ring-brand-amber"
                  />
                  <label
                    htmlFor={option.id}
                    className="ml-3 block text-xs font-medium peer-checked:text-brand-amber/70"
                  >
                    {option.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {/* continue button */}
        <div className="sm:col-span-6">
          <Button
            fullWidth
            type="submit"
            shape="rounded"
            variant="solid"
            color="primary"
            size="large"
          >
            Generate Contract
          </Button>
        </div>
      </div>
    </div>
  );
};

nftDetails.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default nftDetails;
