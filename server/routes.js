const express = require('express');
const app = express();
const controller = require('./controller.js')
app.use(express.json());
const router = express.Router();

router.get('/gym', (req, res) => {
  controller.test()
  .then((data) => {
    res.send(data)
  })
});

module.exports = router;