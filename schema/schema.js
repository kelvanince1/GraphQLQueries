const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const users = [
  { id: '23', firstName: 'Kevin', age: 20 },
  { id: '40', firstName: 'Samantha', age: 21 }
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _find(users, { id: args.id });
      }
    }
  }
});
