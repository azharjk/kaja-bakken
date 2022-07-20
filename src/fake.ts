import { BookType } from "./graphql/SchemaResolverType";

const __books: BookType[] = [
  {
    id: "bid-1",
    name: "Big Bear"
  },
  {
    id: "bid-2",
    name: "Horion World"
  },
  {
    id: "bid-3",
    name: "Monday is the day"
  }
];

const books = (): BookType[] => {
  return __books;
};

export default {
  books
};
