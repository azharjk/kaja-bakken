import express from "express";
import { graphqlHTTP } from "express-graphql";
import env from "./environment";
import { schema, resolver } from "./graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Kaja Bakken: Hello, world!");
});

app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}));

app.listen(env.EXPRESS_PORT, () => {
  console.log(`App running on port ${env.EXPRESS_PORT}`);
});
