const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDB,
  port: process.env.PGPORT,
})

const dbConnect = async () => {
  await pool.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected');
    }
  })
};

dbConnect();

const postExercise = (info) => {
  return pool.query(`
      INSERT INTO exercises (name, body_part, category)
      SELECT '${info.name}', '${info.bodyPart}', '${info.category}'
      `);
};

const postExerciseData = (info) => {
  for (let i = 0; i < info.data.length; i++) {
    pool.query(`
    INSERT INTO exercises_data (exercise_id, set_num, lbs, reps, date)
    SELECT (SELECT id FROM exercises WHERE name = '${info.name}'), ${info.data[i].setNum}, ${info.data[i].lbs}, ${info.data[i].reps}, '${info.date}'
  `)
  };
}

module.exports = { pool, postExercise, postExerciseData }