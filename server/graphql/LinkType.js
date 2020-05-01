const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const LinkTypeEnum = require('./graphql/LinkTypeEnum');

// Construct a Link GraphQL Type
module.exports = new GraphQLObjectType({
    name: 'Link',
    fields: {
        title: { type: new GraphQLNonNull(LinkTypeEnum) },
        url: { type: new GraphQLNonNull(GraphQLString) }
    }
});
