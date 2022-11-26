import React, { useEffect, useState } from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/form/input';
import Textarea from '@/components/ui/form/textarea';
import CustomSelect from '@/components/ui/Select';
import { delimiters, ownersChains } from '@/data/mockData';
import AuthLayout from '@/layouts/_authLayout';
import type { NextPageWithLayout } from '@/types';
import { useAccount, useConnect, useContractWrite, usePrepareContractWrite } from 'wagmi';
import {abi} from '@/abi/FetcchRegistry'
import { InjectedConnector } from 'wagmi/connectors/injected'


const UserDetails: NextPageWithLayout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<any>(null);
  const [namespace, setNameSpace] = useState('');
  const [walletAddress, setWalletAdress] = useState<any>('');
  const contractAddress = "0x098f175dFBc63cF1c516248B66c4Eb6e543755D5"
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: 'acquireNamespace',
    args: [name, walletAddress, file, "metadata", "type"]
  })

  const { data, isLoading, isSuccess, write, writeAsync } = useContractWrite(config)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  useEffect(() => {
    connect()
  }, [])
  useEffect(() => {
    
    if (isConnected) {
      setWalletAdress(() => {
        return address?.toString();
      })
    }
  }, [isConnected])
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
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter name"
            label="Name"
          />
        </div>
        <div className="sm:col-span-3">
          <Input placeholder="Enter email" type="email" label="Email" />
        </div>
        <div className="sm:col-span-3">
          <Input
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="Enter brand color hex(#111111)"
            label="Brand Color"
          />
        </div>
        <div className="sm:col-span-3">
          <Input
            value={file}
            onChange={(e: any) => {
              setFile(e.target.files[0]);
            }}
            placeholder="Upload Image"
            type="file"
            label="Upload Image"
          />
        </div>
        <div className="sm:col-span-6">
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label="Company Description"
            placeholder="Tell us something about your company"
          />
        </div>
        <div className="sm:col-span-3">
          <Input
            value={namespace}
            onChange={(e) => {
              setNameSpace(e.target.value);
            }}
            placeholder="Enter Namespace Id"
            label="Namespace ID"
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
            value={walletAddress}
            onChange={(e) => {
              setWalletAdress(e.target.value);
            }}
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
            onClick={async() => {
              console.log(config)
              const res = writeAsync && await writeAsync()
              console.log("response",res)
            }}
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

UserDetails.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default UserDetails;
