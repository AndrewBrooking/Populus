const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const queries = require('./query/index');

// Construct a Link GraphQL Type
const LinkType = new GraphQLObjectType({
    name: 'Link',
    fields: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) }
    }
});

// Construct a User GraphQL Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        // links: { type: new GraphQLList(LinkType) }
    }
});

// Construct a GraphQL Type for queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getUser: {
            type: UserType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return queries.read.getUser(args._id).then(user => user);
            }
        }
    }
});

// Construct a GraphQL Type for mutations
const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        // Registers a new user
        register: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                photo: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                // links: { type: new GraphQLList(LinkType) }
            },
            resolve(parent, args) {
                return queries.create.registerUser(args).then(user => user);
            }
        },

        updateUser: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLString },
                oldPassword: { type: GraphQLString },
                newPassword: { type: GraphQLString },
                photo: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.username) {
                    return queries.update.updateUsername(args._id, args.username).then(user => user);
                }

                if (args.oldPassword && args.newPassword) {
                    return queries.update.updatePassword(args._id, args.oldPassword, args.newPassword).then(user => user);
                }

                if (args.photo) {
                    return queries.update.updatePhoto(args._id, args.photo).then(user => user);
                }

                if (args.description) {
                    return queries.update.updateDescription(args._id, args.description).then(user => user);
                }
            }
        },

        deleteUser: {
            type: UserType,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return queries.delete.deleteUser(args._id).then(user => user);
            }
        }
    }
});

// Construct and export schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});