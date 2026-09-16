// expeiment 4 set up  a basic graphql api using or express - graphqul
const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define Resilvers
const root ={
    message: () => {
        return "hello student !welcome to the graphql api"
    }
};

// create Graphql endpoint
app.use(
    "graphal",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);
// start the server
app.listen(3008 , () => {
    console.log("server is running at http://localhost:3008/graphql");
});