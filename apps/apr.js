import { ethers } from "ethers";
import dotenv from "dotenv";
import { stakeContractAbi } from "../abis/abi.js";
import { a_year_seconds } from "../constants/constants.js";
import { config } from "../config.js";
dotenv.config();

function formatNumber(num) {
  num = parseFloat(num).toPrecision(3);
  var k = 0;
  while (Math.abs(num) >= 1000) {
    k++;
    num /= 1000.0;
  }
  return `${parseFloat(num)
    .toFixed(3)
    .replace(/\.?0+$/, "")}${["", "K", "M", "B", "T"][k]}`;
}

const getRequiredData = async (contract) => {
  const reward_rate = await contract.rewardRate();
  const pion_staked_in_staking = await contract.totalStaked();
  return {
    reward_rate: reward_rate.toString(),
    pion_staked_in_staking: pion_staked_in_staking.toString(),
  };
};

const getApr = async (contractAddress, rpc) => {
  const provider = new ethers.providers.JsonRpcProvider(rpc);

  const contract = new ethers.Contract(
    contractAddress,
    stakeContractAbi,
    provider
  );

  const data = await getRequiredData(contract);

  const apr =
    ((data.reward_rate * a_year_seconds) / data.pion_staked_in_staking) * 100;

  return apr;
};

export const getAllApr = async () => {
  const reports = {};
  await Promise.all(
    config.map(async (item) => {
      const res = await getApr(item.contractAddress, item.rpc);
      reports[item.chainId] = res;
    })
  );
  return reports;
};
