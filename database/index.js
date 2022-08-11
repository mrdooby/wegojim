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
      ON CONFLICT (name)
      DO NOTHING
      `);
};

const postExerciseData = (info) => {
  for (let i = 0; i < info.data.length; i++) {
    pool.query(`
    INSERT INTO exercises_data (exercise_id, set_num, lbs, reps, date)
    SELECT (SELECT id FROM exercises WHERE name = '${info.name}'), ${info.data[i].setNum}, ${info.data[i].lbs}, ${info.data[i].reps}, '${info.date}'
    ON CONFLICT (set_num, exercise_id, date)
    DO NOTHING
  `)
  };
};

const getPrev = (name) => {
  return pool.query(`
    SELECT E.name, D.date, JSON_AGG(JSON_BUILD_OBJECT('setNum', D.set_num, 'lbs', D.lbs, 'reps', D.reps)) as prev
    FROM exercises E
    LEFT JOIN exercises_data D on E.id = D.exercise_id
    where E.name = '${name}' AND date = (
      SELECT date FROM exercises_data WHERE date > current_date::text ORDER BY date DESC LIMIT 1
    )
    GROUP BY E.name, D.date
  `);
};

const getNames = () => {
  return pool.query(`
    SELECT DISTINCT name, body_part, category
    FROM exercises
  `);
};

const badgeCheck = (query) => {
  return pool.query(`select json_build_array(
    (select id from exercises_data where date='${query.sun}' limit 1),
    (select id from exercises_data where date='${query.mon}' limit 1),
    (select id from exercises_data where date='${query.tues}' limit 1),
    (select id from exercises_data where date='${query.wed}' limit 1),
    (select id from exercises_data where date='${query.thurs}' limit 1),
    (select id from exercises_data where date='${query.fri}' limit 1),
    (select id from exercises_data where date='${query.sat}' limit 1)
  ) as badge_check
  `);
};

const getExerciseId = () => {
  return pool.query(`
    SELECT JSON_AGG(id) FROM exercises;
  `);
};

module.exports = { pool, postExercise, postExerciseData, getPrev, getNames, badgeCheck, getExerciseId}

