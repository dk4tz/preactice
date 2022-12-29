import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema.js';

const mocks = {
  SpaceCat: () => ({
    id: () => 'kitty_1',
    name: () => 'Buzz Cat',
    age: () => 50,
    equipment: () => {
      return [{
        id: 'helmet_1',
        size: 5,
        photo: 'cool pic',
      }];
    },
    thumbnail: 'https://catpics.com/',
  }),
};

const resolvers = {
  Query: {
    getSpaceCat: () => SpaceCat,
  },
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
  }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
