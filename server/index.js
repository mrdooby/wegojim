// imports
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes.js');
const db = require('../database/index.js');
const path = require('path')
// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/wegojim', routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
