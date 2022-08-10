const express = require('express');
const app = express();
const controller = require('./controller.js')
app.use(express.json());
const router = express.Router();

router.post('/gym', controller.postExercise);

module.exports = router;