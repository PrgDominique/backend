const typeDefs = `#graphql

  type User {
    name: String!
  }

  type Users {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    users: [User!]!
    username: [Users!]!
  }

  type Mutation {
    createUserName(name: String!, age: Int!): Users
  }

  `

export default typeDefs
