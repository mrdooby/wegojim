const db = require('../database/index.js');

const postExercise = (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    db.postExercise(req.body[i])
    .then(() => {
      db.postExerciseData(req.body[i])
    })
  };
  res.status(200).send('post successful');
};

const getPrev = (req, res) => {
  db.getPrev(req.query.exercise_name)
  .then((result) => {
    res.send(result.rows)
  })
}

module.exports = { postExercise, getPrev }