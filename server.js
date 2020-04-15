// Imports
const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('./server/schema');

// Constants
const PORT = process.env.PORT || 3001;

// Express Server
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

// Setup app listener
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});