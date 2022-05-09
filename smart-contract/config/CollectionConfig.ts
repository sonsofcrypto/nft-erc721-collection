import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Web3WalletNFT',
  tokenName: 'web3wallet NFT',
  tokenSymbol: 'W3WNFT',
  hiddenMetadataUri: 'ipfs://QmUKqZ1DH3iVYhM76PLDQv1nADv6SYEnodVRNXQiHFaDRd/hidden.json',
  maxSupply: 1133,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x8ba5449f78Cc98576B38AC16983dFBC62FC3C209",
  marketplaceIdentifier: 'web3wallet-nft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
