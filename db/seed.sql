--user table
CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    password VARCHAR(200),
    admin BOOLEAN
)