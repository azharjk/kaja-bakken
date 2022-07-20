import express from "express";
import env from "./environment";

const app = express();

app.get("/", (req, res) => {
  res.send("Kaja Bakken: Hello, world!");
});

app.listen(env.EXPRESS_PORT,  () => {
  console.log(`App running on port ${env.EXPRESS_PORT}`);
});
