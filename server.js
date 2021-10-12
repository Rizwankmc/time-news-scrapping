import express from "express";
import cors from "cors";

import scrapRouter from "./router/scrapRouter.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send(`
    <h1 style="align-content: center">Rizwan Scrapping server</h1>
    <p>Server is running...</p>
  `);
});

app.use("/news", scrapRouter);

app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
