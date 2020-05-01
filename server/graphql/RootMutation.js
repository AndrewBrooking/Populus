const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const LinkType = require('./LinkType');
const UserType = require('./UserType');
const queries = require('../query/index');

// Construct a GraphQL Type for mutations
module.exports = new GraphQLObjectType({
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
                links: { type: new GraphQLNonnull(new GraphQLList(LinkType)) }
            },
            resolve(parent, args) {
                return queries.create.registerUser(args).then(user => user);
            }
        },

        // Updates a user's information
        updateUser: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLString },
                oldPassword: { type: GraphQLString },
                newPassword: { type: GraphQLString },
                photo: { type: GraphQLString },
                description: { type: GraphQLString },
                links: { type: new GraphQLList(LinkType) }
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

                if (args.links) {
                    return queries.update.updateLinks(args._id, args.links).then(user => user);
                }
            }
        },

        // Remove a user permanently
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
