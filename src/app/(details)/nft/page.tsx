import React from 'react';

import Button from '@/components/shared/Button';
import CustomSelect from '@/components/shared/CustomSelect';
import Input from '@/components/shared/Input';
import { gasOptions, ownersChains } from '@/data/mockData';

const nftDetails = () => {
  return (
    <>
      <div className="formShadow p-4 w-full my-12">
        <div>
          <h3 className="text-xl leading-6 font-bold">Provider Details</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please fill in the following details
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Input
              name="collectionName"
              type="text"
              label="Collection Name"
              placeholder="Enter collection name"
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              name="collectionSymbol"
              type="text"
              label="Collection Symbol"
              placeholder="Upload Image"
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              name="collectionLogo"
              type="text"
              label="Collection Logo"
              placeholder="Upload Image"
            />
          </div>

          <div className="sm:col-span-3">
            <CustomSelect
              options={ownersChains}
              selectText="Select Chain"
              label="Chain"
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              name="nftImage"
              type="text"
              label="NFT Image"
              placeholder="Upload NFT image"
            />
          </div>
          <div className="sm:col-span-3">
            <Input
              name="nftName"
              type="text"
              label="NFT Name"
              placeholder="Enter NFT name"
            />
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="description" className="text-xs font-medium block">
              NFT Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Describe your awesome NFT"
              className="customBorder shadow-sm block w-full text-sm rounded-md bg-transparent mt-1"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="text-base font-medium ">
              User should pay gas
            </label>

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
                      className="peer focus:ring-brand-amber border-none h-4 w-4 text-amber-600 focus:ring-0 focus:outline-none focus:border-none"
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
            <Button fullWidth intent="primary">
              Generate Contract
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default nftDetails;
