// imports
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes.js');

// middleware
app.use(express.json());

app.use('/wegojim', routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
