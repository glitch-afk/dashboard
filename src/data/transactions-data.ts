import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/solid';

import { Bitcoin } from '@/components/icons/bitcoin';
import { Bnb } from '@/components/icons/bnb';
import { Ethereum } from '@/components/icons/ethereum';

export const transactionsData = [
  {
    senderId: 'satyam@fetcch',
    receiverId: 'rohan@fetcch',
    amount: {
      icon: Bitcoin,
      value: 100,
    },
    bridgeUsed: 'fetcch',
    fromToken: {
      icon: Ethereum,
    },
    toToken: {
      icon: Bnb,
    },
    status: {
      icon: ArrowPathIcon,
      name: 'Pending',
    },
  },
  {
    senderId: 'satyam@fetcch',
    receiverId: 'rohan@fetcch',
    amount: {
      icon: Bnb,
      value: 100,
    },
    bridgeUsed: 'fetcch',
    fromToken: {
      icon: Ethereum,
    },
    toToken: {
      icon: Bitcoin,
    },
    status: {
      icon: CheckIcon,
      name: 'Success',
    },
  },
];
