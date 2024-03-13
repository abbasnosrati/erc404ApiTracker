import dotenv from "dotenv";
dotenv.config();

const INFURA_URL = process.env.INFURA_URL;

//Apr config
export const config = [
  // {
  //   chainName: "bscTestnet",
  //   rpc: "https://rpc.ankr.com/bsc_testnet_chapel",
  //   contractAddress: "0xe47cA0B03a31607d0E1f9B20823037c9F6226962",
  // },
  {
    chainName: "bsc",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  },
  {
    chainName: "arb",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  },
  {
    chainName: "opti",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  },
  {
    chainName: "base",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  },
  {
    chainName: "blast",
    rpc: "https://rpc.ankr.com/bsc",
    contractAddress: "0xCf5093AACC4Aa9fff703C365727309aDb5e81A0d",
  },
];

//uniswap v3 config
// Can find QUOTER2_ADDRESS and FACTORY_ADDRESS for specific Chain in: https://docs.uniswap.org/contracts/v3/reference/deployments

//calculate token0 to token1

export const getPriceConfig = [
  // {
  //   name: "Mainnet",
  //   rpc: INFURA_URL,
  //   tokenIn: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //weth
  //   decimalsIn: "18",
  //   tokenOut: "0xdAC17F958D2ee523a2206206994597C13D831ec7", //usdt
  //   decimalsOut: "6",
  //   QUOTER2_ADDRESS: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
  //   FACTORY_ADDRESS: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  //   fee: 3000,
  //   inputAmount: "1",
  // },
  {
    name: "bsc",
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
];
