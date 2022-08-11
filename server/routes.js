const express = require('express');
const app = express();
const controller = require('./controller.js')
app.use(express.json());
const router = express.Router();

router.post('/gym', controller.postExercise);
router.get('/gym/prev', controller.getPrev);
router.get('/gym/names', controller.getNames);
router.get('/gym/badge', controller.badgeCheck);
router.get('/pkmnctr', controller.getExerciseId);
router.get('/pkmnctr/name', controller.getSpecificName);

module.exports = router;