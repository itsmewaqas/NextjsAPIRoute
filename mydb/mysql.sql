-- create table query
-- CREATE TABLE Users (
--    id INTEGER PRIMARY KEY,
--    name TEXT NOT NULL,
--    email TEXT NOT NULL,
--    cell TEXT UNIQUE,
--    password TEXT UNIQUE,
--    created_at DATETIME DEFAULT (datetime('now', '+5 hours'))
-- );

-- insert query
-- INSERT INTO Users (name, email, cell, password)
-- VALUES ('alber kahn', 'alber.khan@gmail.com', '0333-6665554','alber@123');

-- SELECT * FROM Users;

-- table drop or delete query
-- DROP TABLE Users;


-- CREATE TABLE Customers (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE,
--     cell TEXT UNIQUE,
--     password TEXT NOT NULL,
--     created_at DATETIME DEFAULT (datetime('now', '+5 hours'))
-- );

-- INSERT INTO Customers (name, email, cell, password)
-- VALUES ('muhammad waqas', 'm.waqas@gmail.com', '0322-2946642', 'admin@123');

-- SELECT datetime(created_at, '+5 hours') AS local_time
-- FROM Customers;



-- ALTER TABLE Users
-- ADD COLUMN created_at DATETIME;

-- UPDATE Users
-- SET created_at = datetime('now', '+5 hours')
-- WHERE created_at IS NULL;