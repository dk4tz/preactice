const typeDefs = `#graphql
  "Query to get space cats for homepage"
  type Query {
    getSpaceCat: [SpaceCat!]
  }
  "An intergalactic catagion"
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    equipment: [Helmet]
    thumbnail: String
  }

  type Helmet {
    id: ID!
    size: Int!
    photo: String
  }
`;

export { typeDefs };
