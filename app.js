/**
 * @author Nanichang Katzing
 * @email nanipaul68@gmail.com
 * @create date: 21 August, 2018
 * @modify date: 21 August, 2018
 * @modify by 
 */

'use strict';
// if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config();
// };

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');

app.use(cors());

const 
  port = process.env.PORT,
  host = process.env.HOST,
  env = process.env.NODE_ENV,
  user = process.env.DB_USER,
  password = process.env.DB_PASSWORD,
  db_host = process.env.DB_HOST,
  db_port = process.env.DB_PORT,
  database = process.env.DB_NAME;

mongoose.connect(`mongodb://${user}:${password}@${db_host}:${db_port}/${database}`);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`🚀 Server listening for request on port ${port}`);
});