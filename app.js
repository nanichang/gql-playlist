const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://nani:secret1@ds125352.mlab.com:25352/graphql-apollo');
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Server listening for request on port 3000');
});