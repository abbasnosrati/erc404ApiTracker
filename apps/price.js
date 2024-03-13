import { ethers } from "ethers";

import { getPriceConfig } from "../config.js";

import QuoterV2ABI from "@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json" assert { type: "json" };

import PoolABI from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json" assert { type: "json" };

import FactoryABI from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json" assert { type: "json" };

function sqrtToPrice(sqrt, decimals0, decimals1, token0IsInput) {
  const numerator = sqrt ** 2;
  const denominator = 2 ** 192;
  let ratio = numerator / denominator;
  const shiftDecimals = Math.pow(10, decimals0 - decimals1);
  ratio = ratio * shiftDecimals;
  if (!token0IsInput) {
    return 1 / ratio;
  }
  return ratio;
}

async function main(
  tokenIn,
  decimalsIn,
  tokenOut,
  decimalsOut,
  fee,
  amountIn,
  rpc,
  FACTORY_ADDRESS,
  QUOTER2_ADDRESS
) {
  const provider = new ethers.providers.JsonRpcProvider(rpc);

  const factory = new ethers.Contract(
    FACTORY_ADDRESS,
    FactoryABI.abi,
    provider
  );

  const poolAddress = factory.getPool(tokenIn, tokenOut, fee);

  const poolContract = new ethers.Contract(poolAddress, PoolABI.abi, provider);

  const slot0 = await poolContract.slot0();
  const sqrtPriceX96 = slot0.sqrtPriceX96;

  const token0 = await poolContract.token0();

  const token0IsInput = tokenIn === token0;

  const quoter = new ethers.Contract(
    QUOTER2_ADDRESS,
    QuoterV2ABI.abi,
    provider
  );

  const params = {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    fee: fee,
    amountIn: amountIn,
    sqrtPriceLimitX96: "0",
  };

  const quote = await quoter.callStatic.quoteExactInputSingle(params);

  const sqrtPriceX96After = quote.sqrtPriceX96After;

  const price = sqrtToPrice(
    sqrtPriceX96,
    decimalsIn,
    decimalsOut,
    token0IsInput
  );

  const priceAfter = sqrtToPrice(
    sqrtPriceX96After,
    decimalsIn,
    decimalsOut,
    token0IsInput
  );

  const absoluteChange = price - priceAfter;

  const percentChange = absoluteChange / price;

  return {
    price: price,
    priceAfter: priceAfter,
    percentChange: (percentChange * 100).toFixed(3) + "%",
  };
}

export const getPrice = async () => {
  const data = {};
  await Promise.all(
    getPriceConfig.map(async (item) => {
      const res = await main(
        item.tokenIn,
        item.decimalsIn,
        item.tokenOut,
        item.decimalsOut,
        item.fee,
        ethers.utils.parseEther(item.inputAmount),
        item.rpc,
        item.FACTORY_ADDRESS,
        item.QUOTER2_ADDRESS
      );
      data[item.name] = res;
    })
  );
  return data;
};
