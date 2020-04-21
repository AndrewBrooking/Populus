const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const User = require('./model/User');

// Construct a Link GraphQL Type
const LinkType = new GraphQLInputObjectType({
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
            args: { uuid: { type: GraphQLString } },
            resolve(parent, args) {
                return User.findById(uuid);
            }
        }
    }
});

// Construct a GraphQL Type for mutations
const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
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
                let user = new User({
                    email: args.email,
                    username: args.username,
                    password: args.password,
                    photo: args.photo,
                    description: args.description,
                    links: []
                });
                return user.save();
            }
        }
    }
});

// Construct and export schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});