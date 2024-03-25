import dotenv from "dotenv";
dotenv.config();

const INFURA_URL = process.env.INFURA_URL;

export const rpc_list = {
  56: [
    "https://rpc.ankr.com/bsc",
    "https://bsc-pokt.nodies.app",
    "https://bsc-dataseed1.defibit.io",
  ],
  42161: [
    "https://rpc.ankr.com/arbitrum",
    "https://endpoints.omniatech.io/v1/arbitrum/one/public",
    "https://arbitrum.llamarpc.com",
  ],
  10: [
    "https://rpc.ankr.com/optimism",
    "https://op-pokt.nodies.app",
    "https://optimism-rpc.publicnode.com",
  ],
  8453: [
    "https://rpc.ankr.com/base",
    "https://developer-access-mainnet.base.org",
    "https://mainnet.base.org",
  ],

  81457: [
    "https://rpc.ankr.com/blast",
    "https://blast.blockpi.network/v1/rpc/public",
    "https://blastl2-mainnet.public.blastapi.io",
  ],
};

//Apr config
export const config = [
  // {
  //   chainName: "bscTestnet",
  //   rpc: "https://rpc.ankr.com/bsc_testnet_chapel",
  //   contractAddress: "0xe47cA0B03a31607d0E1f9B20823037c9F6226962",
  // },
  {
    chainName: "bsc",
    chainId: "56",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xC34bEdA2B2a65C373B28218995bFb9100a348257",
  },
  {
    chainName: "arb",
    chainId: "42161",
    rpc: "https://rpc.ankr.com/arbitrum",
    contractAddress: "",
  },
  {
    chainName: "opti",
    chainId: "10",
    rpc: "https://rpc.ankr.com/optimism",
    contractAddress: "",
  },
  {
    chainName: "base",
    chainId: "8453",
    rpc: "https://rpc.ankr.com/base",
    contractAddress: "",
  },
  {
    chainName: "blast",
    chainId: "81457",
    rpc: "https://rpc.ankr.com/blast",
    contractAddress: "",
  },
  // {
  //   chainName: "sepolia",
  //   chainId: "11155111",
  //   rpc: "https://rpc.ankr.com/bsc",
  //   contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  // },
  // {
  //   chainName: "mumbai",
  //   chainId: "80001",
  //   rpc: "https://rpc.ankr.com/bsc",
  //   contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  // },
];

//uniswap v3 config
// Can find QUOTER2_ADDRESS and FACTORY_ADDRESS for specific Chain in: https://docs.uniswap.org/contracts/v3/reference/deployments

export const getPriceConfig = [
  // {
  //   name: "Mainnet",
  //   rpc: INFURA_URL,
  //   tokenIn: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //weth
  //   decimalsIn: "18",11155111
  //   tokenOut: "0xdAC17F958D2ee523a2206206994597C13D831ec7", //usdt
  //   decimalsOut: "6",
  //   QUOTER2_ADDRESS: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
  //   FACTORY_ADDRESS: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  //   fee: 3000,
  //   inputAmount: "1",
  // },
  {
    name: "bsc",
    chainId: "56",
    rpc: "https://rpc.ankr.com/bsc",
    tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
    decimalsIn: "18",
    tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
    decimalsOut: "18",
    QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    fee: 3000,
    inputAmount: "1",
  },
  {
    name: "arb",
    chainId: "42161",
    rpc: "https://rpc.ankr.com/bsc",
    tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
    decimalsIn: "18",
    tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
    decimalsOut: "18",
    QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    fee: 3000,
    inputAmount: "1",
  },
  {
    name: "opti",
    chainId: "10",
    rpc: "https://rpc.ankr.com/bsc",
    tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
    decimalsIn: "18",
    tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
    decimalsOut: "18",
    QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    fee: 3000,
    inputAmount: "1",
  },
  {
    name: "base",
    chainId: "8453",
    rpc: "https://rpc.ankr.com/bsc",
    tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
    decimalsIn: "18",
    tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
    decimalsOut: "18",
    QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    fee: 3000,
    inputAmount: "1",
  },
  {
    name: "blast",
    chainId: "81457",
    rpc: "https://rpc.ankr.com/bsc",
    tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
    decimalsIn: "18",
    tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
    decimalsOut: "18",
    QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    fee: 3000,
    inputAmount: "1",
  },

  // {
  //   name: "sepolia",
  //   chainId: "11155111",
  //   rpc: "https://rpc.ankr.com/bsc",
  //   tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
  //   decimalsIn: "18",
  //   tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
  //   decimalsOut: "18",
  //   QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
  //   FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
  //   fee: 3000,
  //   inputAmount: "1",
  // },

  // {
  //   name: "mumbai",
  //   chainId: "80001",
  //   rpc: "https://rpc.ankr.com/bsc",
  //   tokenIn: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", //wbnb
  //   decimalsIn: "18",
  //   tokenOut: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", //usdc
  //   decimalsOut: "18",
  //   QUOTER2_ADDRESS: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
  //   FACTORY_ADDRESS: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
  //   fee: 3000,
  //   inputAmount: "1",
  // },
];
