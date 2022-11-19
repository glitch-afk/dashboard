import { Bitcoin } from '@/components/icons/bitcoin';
import { Bnb } from '@/components/icons/bnb';
import { Ethereum } from '@/components/icons/ethereum';

export const allUsersData = [
  {
    index: '1',
    userId: 'satyam@fetcch',
    totalVolumeDone: {
      icon: Ethereum,
      amount: 10000,
    },
    totalTransaction: 100,
    defaultChain: {
      icon: Bnb,
      name: 'Binance',
    },
  },
  {
    index: '2',
    userId: 'satyam@fetcch',
    totalVolumeDone: {
      icon: Ethereum,
      amount: 100,
    },
    totalTransaction: 1000,
    defaultChain: {
      icon: Bitcoin,
      name: 'Binance',
    },
  },
];