// Imports
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('./server/schema');

// Constants
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/populus_dev_db";

// Express Server
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    pretty: true
}));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to mongo DB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

// Setup app listener
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});