import fs from "fs";
import { join } from "path";
import { buildSchema } from "graphql";
import { SchemaResolverType } from "./graphql/SchemaResolverType";
import fake from "./fake";

// FIXME: Handle this can be error
const data = fs.readFileSync(join(__dirname, "./graphql/schema.graphqls"));

export const schema = buildSchema(data.toString());

export const resolver: SchemaResolverType = {
  books() {
    return fake.books();
  },
};
