
// FetcchX Registry
import React from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/form/input';
import Textarea from '@/components/ui/form/textarea';
import CustomSelect from '@/components/ui/Select';
import { delimiters, ownersChains } from '@/data/mockData';
import AuthLayout from '@/layouts/_authLayout';
import type { NextPageWithLayout } from '@/types';

const userDetails: NextPageWithLayout = () => {
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
          <Input placeholder="Enter name" label="Name" />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Enter email" type="email" label="Email" />
        </div>
        <div className="sm:col-span-3">
          <Input
            placeholder="Enter brand color hex(#111111)"
            label="Brand Color"
          />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Upload Image" type="file" label="Upload Image" />
        </div>
        <div className="sm:col-span-6">
          <Textarea
            label="Company Description"
            placeholder="Tell us something about your company"
          />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Enter Namespace Id" label="Namespace ID" />
        </div>
        <div className="sm:col-span-3">
          <CustomSelect
            options={delimiters}
            selectText="Select delimiter"
            label="Select Delimiter"
          />
        </div>
        <div className="sm:col-span-3">
          <Input
            placeholder="Enter wallet address"
            label="Owner's Wallet Address"
          />
        </div>
        <div className="sm:col-span-3">
          <CustomSelect
            options={ownersChains}
            selectText="Select chain"
            label="Select Owner's Chain"
          />
        </div>
        <div className="sm:col-span-6">
          <Button
            shape="rounded"
            variant="solid"
            color="primary"
            size="large"
            fullWidth
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

userDetails.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default userDetails;
