import { getScrapData } from "../utils/index.js";

export const scrapNewsList = async (req, res) => {
  try {
    const list = await getScrapData();
    res.send({ code: 200, list, msg: "Success" });
  } catch (error) {
    console.log("Error in scrapNewsList controller =>", error.message);
    res.send({ code: 500, msg: "Internal Server Error" });
  }
};
