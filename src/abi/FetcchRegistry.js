export const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"logo","type":"string"},{"indexed":false,"internalType":"address","name":"providerContract","type":"address"},{"indexed":false,"internalType":"string","name":"_metadata","type":"string"},{"indexed":false,"internalType":"enum metadataType","name":"_type","type":"uint8"}],"name":"ProviderCreated","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_logo","type":"string"},{"internalType":"string","name":"_metadata","type":"string"},{"internalType":"enum metadataType","name":"_type","type":"uint8"}],"name":"acquireNamespace","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getProviders","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"logo","type":"string"},{"internalType":"address","name":"providerContract","type":"address"},{"internalType":"string","name":"_metadata","type":"string"},{"internalType":"enum metadataType","name":"_type","type":"uint8"}],"internalType":"struct ProvidersInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]
