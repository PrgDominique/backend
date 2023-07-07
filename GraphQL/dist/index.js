import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import User from './model.js';
main().catch((err) => console.log(err));
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array below.
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    // Types of schema
    const typeDefs = `#graphql
  
  type User {
    name: String!
  }

  type Query {
    users: [User!]!
  }
  `;
    // Resolver map
    const resolvers = {
        Query: {
            users: async () => {
                const user = await User.find();
                return user;
            },
        },
        // Because Book.author returns an object with a "name" field,
        // Apollo Server's default resolver for Author.name will work.
        // We don't need to define one.
    };
    // Pass schema definition and resolvers to the
    // ApolloServer constructor
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}
