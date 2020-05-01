const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const LinkType = require('./LinkType');

// Construct a User GraphQL Type
module.exports = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        links: { type: new GraphQLNonnull(new GraphQLList(LinkType)) }
    }
});
