INSERT INTO houses (name, address, city, state, zip) VALUES
(${name}, ${address}, ${city}, ${state}, ${zip})


-- ALTER TABLE houses
--   ADD COLUMN img text;
--   ADD COLUMN morgage integer;
--   ADD COLUMN rent integer;
  RETURNING *;