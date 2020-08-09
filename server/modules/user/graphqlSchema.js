const { gql } = require('apollo-server-express');

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  scalar Date
  scalar Email
  
  type User {
    user_name: String,
    birth_date: Date,
    email: Email,
    password: String,
    dateFormated: String
  },
  type Query {
    users: [User]
  },
  type Mutation {
    addUser(
      user_name: String,
      birth_date: Date,
      email: Email,
      password: String
    ): User,
  }
`;

module.exports = typeDefs;