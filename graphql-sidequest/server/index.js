import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema.js';

const mockData = {
  SpaceCat: () => ({
    id: () => 'kitty_1',
    name: () => 'Buzz Cat',
    age: () => 50,
    equipment: () => {
      return {
        id: 'helmet_1',
        size: 5,
        photo: 'cool pic',
      };
    },
    thumbnail: 'https://catpics.com/',
  }),
};

const resolvers = {
  Query: {
    spaceCats: () => SpaceCat,
  },
};

const server = new ApolloServer({
  // addMocksToSchema accepts a schema instance and provides
  // mocked data for each field in the schema
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mockData,
  }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
