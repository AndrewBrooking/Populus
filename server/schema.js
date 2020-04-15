const { buildSchema } = require('graphql');

moudule.exports = {

    // Construct a schema, using GraphQL schema language
    schema: buildSchema(`
        type Query {
            hello: String
        }
    `),

    // The root provides a resolver function for each API endpoint
    root: {
        hello: () => {
            return 'Hello world!';
        },
    }
}