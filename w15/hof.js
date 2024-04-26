import { cfpData } from "./storage.js";

const getAvg = () => {
  const avgFP =
    cfpData.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0) / cfpData.length;
  return avgFP;
};

export { getAvg };