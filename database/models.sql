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

previous data

with data_obj as (
select json_build_object('setNum', set_num, 'lbs', lbs, 'reps', reps) from exercises_data where exercise_id = (select id from exercises where name = 'squat')
)
select json_agg(data_obj.*) as data from data_obj;

select e.name, d.date, json_agg(json_build_object('setNum', d.set_num, 'lbs', d.lbs, 'reps', d.reps))
from exercises e
left join exercises_data d on e.id = d.exercise_id
where e.name = 'squat' AND date = (
  SELECT date FROM exercises_data where date < current_date::text order by date desc limit 1
)
group by e.name, d.date;

    SELECT E.name, D.date, JSON_AGG(JSON_BUILD_OBJECT('setNum', D.set_num, 'lbs', D.lbs, 'reps', D.reps))
    FROM exercises E
    LEFT JOIN exercises_data D on E.id = D.exercise_id
    where E.name = 'squat' AND D.date = (
      SELECT date FROM exercises_data WHERE date > current_date::text ORDER BY date DESC LIMIT 1
    )
    GROUP BY E.name, D.date

select distinct name from exercises;

select json_build_array(
  (select id from exercises_data where date='8-6-2022' limit 1),
  (select id from exercises_data where date='8-7-2022' limit 1),
  (select id from exercises_data where date='8-8-2022' limit 1),
  (select id from exercises_data where date='8-9-2022' limit 1),
  (select id from exercises_data where date='8-10-2022' limit 1),
  (select id from exercises_data where date='8-11-2022' limit 1),
  (select id from exercises_data where date='8-12-2022' limit 1)
) as badge_check;

create unique index exercises_data_set_num_unique
on (exercises_data(set_num), exercises_data(exercise_id), exercises_data(date));

alter table exercises_data
add constraint exercises_data_set_num_unique
unique (set_num, exercise_id, date);

    SELECT E.name, D.date, JSON_AGG(JSON_BUILD_OBJECT('setNum', D.set_num, 'lbs', D.lbs, 'reps', D.reps)) as prev
    FROM exercises E
    LEFT JOIN exercises_data D on E.id = D.exercise_id
    where E.name = 'bench press' AND date = (
      SELECT date FROM exercises_data WHERE date > current_date::text ORDER BY date DESC LIMIT 1
    )
    GROUP BY E.name, D.date;

    // get all exercise id

  select json_agg(id) from exercises;