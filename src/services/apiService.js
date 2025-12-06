import axios from "axios";
import fs from "fs";
import path from "path";

const cachePath = path.resolve("src/data/cache.json");

// Read cache file
export function readCache() {
  try {
    const data = fs.readFileSync(cachePath, "utf-8");
    return JSON.parse(data || "{}");
  } catch (err) {
    return {};
  }
}

// Write cache file
export function writeCache(data) {
  fs.writeFileSync(cachePath, JSON.stringify(data, null, 2));
}

// Fetch with caching
export async function fetchData(url, cacheKey) {
  const cache = readCache();

  // 10 minute cache expiry
  const expiry = 10 * 60 * 1000;

  if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < expiry) {
    return cache[cacheKey].data;
  }

  const response = await axios.get(url);

  cache[cacheKey] = {
    timestamp: Date.now(),
    data: response.data,
  };

  writeCache(cache);

  return response.data;
}
