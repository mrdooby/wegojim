CREATE TABLE exercises (
  id integer,
  _name text,
  _date text,
  body_part varchar(10),
  category varchar(20)
)

CREATE TABLE exercises_data (
  id integer,
  exercise_id integer,
  set_num integer,
  lbs integer,
  reps integer
)