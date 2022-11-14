import React from 'react';

import Button from '@/components/shared/Button';
import CustomSelect from '@/components/shared/CustomSelect';
import Input from '@/components/shared/Input';
import { delimiters, ownersChains } from '@/data/mockData';

const userDetails = () => {
  return (
    <div className="formShadow p-4 w-full">
      <div>
        <h3 className="text-xl leading-6 font-bold">Provider Details</h3>
        <p className="mt-1 text-sm text-gray-500">
          Please fill in the following details
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="Enter name"
          />
        </div>

        <div className="sm:col-span-3">
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter email"
          />
        </div>

        <div className="sm:col-span-3">
          <Input
            name="color"
            type="text"
            label="Brand Color"
            placeholder="Enter brand color hex(#111111)"
          />
        </div>

        <div className="sm:col-span-3">
          <Input
            name="image"
            type="text"
            label="Upload Image"
            placeholder="Upload Image"
          />
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="description" className="text-xs font-medium block">
            Company Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Tell us something about your company"
            className="customBorder shadow-sm block w-full text-sm rounded-md bg-transparent mt-1"
          />
        </div>

        <div className="sm:col-span-3">
          <Input
            name="namespace"
            type="text"
            label="Namespace Id"
            placeholder="For e.g. metamask or fetcch"
          />
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
            name="address"
            type="text"
            label="Owners Wallet Address"
            placeholder="Enter wallet address"
          />
        </div>
        <div className="sm:col-span-3">
          <CustomSelect
            options={ownersChains}
            selectText="Select chain"
            label="Select Owner Chain"
          />
        </div>

        <div className="sm:col-span-6">
          <Button fullWidth intent="primary">
            <span>Continue</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default userDetails;
