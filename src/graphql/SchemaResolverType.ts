export interface SchemaResolverType {
  books: () => BookType[];
}

export interface BookType {
  id: string;
  name: string;
}
