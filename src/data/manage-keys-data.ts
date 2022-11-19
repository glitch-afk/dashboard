import { CheckIcon, NoSymbolIcon, TrashIcon } from '@heroicons/react/24/solid';

export const manageKeysData = [
  {
    keyName: 'Admin Key',
    publicKey: '0x6AC63E...FE137E',
    createdOn: '15th Nov 2023, 23:24',
    status: 'Active',
    keyOperations: {
      deleteKey: {
        icon: TrashIcon,
        name: 'Delete Key',
      },
      statusKey: {
        icon: NoSymbolIcon,
        name: 'Deactivate',
      },
    },
  },

  {
    keyName: 'Admin Key',
    publicKey: '0x6AC63E...FE137E',
    createdOn: '15th Nov 2023, 23:24',
    status: 'Deactivated',
    keyOperations: {
      deleteKey: {
        icon: TrashIcon,
        name: 'Delete Key',
      },
      statusKey: {
        icon: CheckIcon,
        name: 'Activate',
      },
    },
  },
];
