const {
    GraphQLSchema
} = require('graphql');

const RootQuery = require('./RootQuery');
const RootMutation = require('./RootMutation');

// Construct and export schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});