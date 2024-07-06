-- Create the company table
CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    key VARCHAR(5) NOT NULL,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Create the action table
CREATE TABLE action (
    id SERIAL PRIMARY KEY,
    companyId INTEGER NOT NULL,
    redirectKey VARCHAR(255) NOT NULL,
    redirectLink VARCHAR(255) NOT NULL,
    ip VARCHAR(45),
    userAgent TEXT,
    country VARCHAR(100),
    region VARCHAR(100),
    city VARCHAR(100),
    FOREIGN KEY (companyId) REFERENCES company(id)
);

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Create the session table
CREATE TABLE session (
    id SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
);


-- Create user
INSERT INTO users (email, name, password, role)
VALUES ('', '', '', '')


-- add column to table
ALTER TABLE users
ADD COLUMN date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Create session
INSERT INTO session (userId, token)
VALUES ('', '')
