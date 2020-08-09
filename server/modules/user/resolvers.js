// if we need a database we can use mongoose and the model for it
// const User = require('./models/user');
const moment = require('moment');
const { DateResolver, EmailAddressResolver } = require('graphql-scalars');

const Users = [];

// Provide resolver functions for the GraphQL schema
const resolvers = {
  Date: DateResolver,
  Email: EmailAddressResolver,
  Query: {
    users: () => Users
    // if we want to use mongoose and get all user we can use the following
    // users: () => User.find({})
  },
  Mutation: {
    addUser: (parent, user) => {
      console.log({user});
      Users.push({ ...user });
      return user;
      // using a db
      // const newUser = new User({ ...user });
      // return newUser.save();
    }
  },
  User: {
    dateFormated: ({ birth_date }) => moment(birth_date).format("dddd, MMMM Do YYYY"),
  }
};

module.exports = resolvers;