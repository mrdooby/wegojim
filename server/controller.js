const db = require('../database/index.js');

const postExercise = (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    db.postExercise(req.body[i])
    .then(() => {
      db.postExerciseData(req.body[i])
    })
  };
  res.status(200).send(req.body);
};

const getPrev = (req, res) => {
  db.getPrev(req.query.exercise_name)
  .then((result) => {
    res.json(result.rows)
  })
};

const getNames = (req, res) => {
  db.getNames()
  .then((result) => {
    res.json(result.rows)
  })
};

const badgeCheck = (req, res) => {
  db.badgeCheck(req.query)
  .then((result) => {
    res.json(result.rows[0].badge_check)
  })
};

const getExerciseId = (req, res) => {
  db.getExerciseId()
  .then((result) => {
    res.json(result.rows[0]["json_agg"])
  })
};

const getSpecificName = (req, res) => {
  db.getSpecificName(req.query.pkmn_id)
  .then((result) => {
    res.json(result.rows[0].name)
  })
}

module.exports = { postExercise, getPrev, getNames, badgeCheck, getExerciseId, getSpecificName }