// import { ApolloServer } from '@apollo/server'
// import { startStandaloneServer } from '@apollo/server/standalone'
// // Resolvers define how to fetch the types defined in your schema.
// // This resolver retrieves books from the "books" array below.
// const librariess = [
//   {
//     branch: 'downtown',
//   },
//   {
//     branch: 'riverside',
//   },
// ]
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//     branch: 'riverside',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//     branch: 'downtown',
//   },
// ]
// // Resolver map
// const resolvers = {
//   Query: {
//     libraries() {
//       // Return our hardcoded array of libraries
//       return librariess
//     },
//   },
//   Library: {
//     books(parent) {
//       // Filter the hardcoded array of books to only include
//       // books that are located at the correct branch
//       return books.filter((book) => book.branch === parent.branch)
//     },
//   },
//   Book: {
//     // The parent resolver (Library.books) returns an object with the
//     // author's name in the "author" field. Return a JSON object containing
//     // the name, because this field expects an object.
//     author(parent) {
//       return {
//         name: parent.author,
//       }
//     },
//   },
//   // Because Book.author returns an object with a "name" field,
//   // Apollo Server's default resolver for Author.name will work.
//   // We don't need to define one.
// }
// // Pass schema definition and resolvers to the
// // ApolloServer constructor
// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })
// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// })
// console.log(`🚀  Server ready at: ${url}`)
