const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const UserType = require('./graphql/UserType');
const queries = require('./query/index');

// Construct a GraphQL Type for queries
module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        getUser: {
            type: UserType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return queries.read.getUser(args._id).then(user => user);
            }
        },

        getUsers: {
            type: new GraphQLNonnull(new GraphQLList(new GraphQLNonNull(UserType))),
            resolve() {
                return queries.read.getUsers().then(users => users);
            }
        }
    }
});
