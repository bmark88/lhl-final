DROP TABLE IF EXISTS groups CASCADE;
CREATE TABLE groups
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE(name)
);