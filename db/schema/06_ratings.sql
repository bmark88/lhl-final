DROP TABLE IF EXISTS ratings CASCADE;
CREATE TABLE ratings
(
  id SERIAL PRIMARY KEY NOT NULL,
  rater_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  rated_user_id INTEGER NOT NULL,
  rating SMALLINT NOT NULL DEFAULT 0
);