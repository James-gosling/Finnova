import { HexString } from '@gear-js/api';

interface ContractSails {
  programId: HexString,
  idl: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: 'wss://testnet.vara.network', // import.meta.env.VITE_NODE_ADDRESS,
  BACK: import.meta.env.VITE_BACKEND_ADDRESS,
  GAME: import.meta.env.VITE_CONTRACT_ADDRESS as HexString,
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  NOTFOUND: '*',
};

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
export const sponsorName = "";
export const sponsorMnemonic = "";

export const CONTRACT_DATA: ContractSails = {
  programId: '0xd40cc1171a36ffd9ede9c5ce226ec98403b746c3243c7fac1d383089ed23d328',
  
  
  idl: `
    type MiniDexsEvents = enum {
  RefundOfVaras: u128,
  VFTContractIdSet,
  MinTokensToAddSet,
  TokensAdded,
  SetTokensPerVaras,
  TotalSwapInVaras: u128,
  TokensSwapSuccessfully: struct { total_tokens: u128, total_varas: u128 },
  Error: MiniDexsErrors,
};

type MiniDexsErrors = enum {
  MinTokensToAdd: u128,
  CantSwapTokens: struct { tokens_in_vft_contract: u256 },
  CantSwapUserTokens: struct { user_tokens: u256, tokens_to_swap: u256 },
  ContractCantMint,
  CantSwapTokensWithAmount: struct { min_amount: u128, actual_amount: u128 },
  OnlyOwnerCanDoThatAction,
  VftContractIdNotSet,
  ErrorInVFTContract,
  ErrorInGetNumOfVarasToSwap,
  OperationWasNotPerformed,
};

type MiniDexsQueryEvents = enum {
  ContractBalanceInVaras: u128,
  UserTotalTokensAsU128: u128,
  UserTotalTokens: u256,
  TotalTokensToSwap: u256,
  TotalTokensToSwapAsU128: u128,
  TokensToSwapOneVara: u128,
  NumOfTokensForOneVara: u128,
  Error: MiniDexsErrors,
};

constructor {
  New : ();
  NewWithData : (vft_contract_id: opt actor_id, min_tokens_to_add: u128, tokens_per_vara: u128);
};

service MiniDeXs {
  AddTokensToContract : (tokens_to_add: u128) -> MiniDexsEvents;
  SetMinTokensToAdd : (min_tokens_to_add: u128) -> MiniDexsEvents;
  SetTokensPerVara : (tokens_per_vara: u128) -> MiniDexsEvents;
  SetVftContractId : (vft_contract_id: actor_id) -> MiniDexsEvents;
  SwapTokensByNumOfVaras : () -> MiniDexsEvents;
  SwapTokensToVaras : (amount_of_tokens: u128) -> MiniDexsEvents;
  query ContractTotalVarasStored : () -> MiniDexsQueryEvents;
  query TokensToSwapOneVara : () -> MiniDexsQueryEvents;
  query TotalTokensToSwap : () -> MiniDexsQueryEvents;
  query TotalTokensToSwapAsU128 : () -> MiniDexsQueryEvents;
};

  `
};