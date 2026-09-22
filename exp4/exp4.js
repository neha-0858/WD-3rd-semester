// expeiment 4 set up  a basic graphql api using or express - graphqul
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const sc