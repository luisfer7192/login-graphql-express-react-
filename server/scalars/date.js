// example of custom scalars https://www.graphql-tools.com/docs/scalars/
// but we are going to use graphql-scalars this time
const { GraphQLScalarType, Kind } = require('graphql');

module.exports.ScalarDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value) // ast value is always in string format
    }
    return null;
  },
});

