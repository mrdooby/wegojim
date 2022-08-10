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

module.exports = { postExercise }