import { Bnb } from '@/components/icons/bnb';
import { Ethereum } from '@/components/icons/ethereum';

export const nftContractData = [
  {
    contractAddress: '0x24a94...93dd',
    nftName: 'Tron 1',
    collectionName: 'Tron Collection',
    nftsMinted: '78 NFTs',
    nftsImage: 'view',
    nftSymbol: 'SAT',
    listOfChains: {
      icon: Ethereum,
    },
  },
  {
    contractAddress: '0x24a94...93dd',
    nftName: 'Tron 2',
    collectionName: 'Tron Collection 2',
    nftsMinted: '23 NFTs',
    nftsImage: 'view',
    nftSymbol: 'SAT',
    listOfChains: {
      icon: Bnb,
    },
  },
];
