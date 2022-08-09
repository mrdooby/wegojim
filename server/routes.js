const express = require('express');
const app = express();

app.use(express.json());
const router = express.Router();

router.get('/gym', (req, res) => {
  res.send('hi')
});

module.exports = router;