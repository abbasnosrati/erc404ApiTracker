import express from "express";
import cors from "cors";
import NodeCache from "node-cache";
import dotenv from "dotenv";

dotenv.config();

import { getAllApr } from "./apps/apr.js";
import { getEmits } from "./apps/emits.js";
import { getPrice } from "./apps/price.js";

const port = process.env.PORT;

const cache = new NodeCache({
  stdTTL: 60,
  checkperiod: 3000 * 10,
});

const app = express();

app.use(cors());

app.get("/apr", async (req, res) => {
  let savedAprData = cache.get("savedAprData");
  if (!savedAprData) {
    savedAprData = await getAllApr();
    cache.set("savedAprData", savedAprData);
  }
  res.json(savedAprData);
});

app.get("/emits", async (req, res) => {
  const result = await getEmits();
  res.json(result);
});

app.get("/price", async (req, res) => {
  let savedPriceData = cache.get("savedPriceData");
  if (!savedPriceData) {
    savedPriceData = await getPrice();
    cache.set("savedPriceData", savedPriceData);
  }
  res.json(savedPriceData);
});

app.get("/stats", async (req, res) => {
  let savedStatsData = cache.get("savedStatsData");
  if (!savedStatsData) {
    const data = {};
    data["apr"] = await getAllApr();
    const res = await getEmits();
    data["emits"] = res.value;
    data["day"] = res.day;
    data["prices"] = await getPrice();
    savedStatsData = data;
    cache.set("savedStatsData", savedStatsData);
  }
  res.json(savedStatsData);
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
