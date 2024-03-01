CREATE DATABASE todoByGemini;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  priority INT NOT NULL DEFAULT 0,
  due_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password, email, created_at, updated_at) VALUES
('alice', 'password1', 'alice@example.com', NOW(), NOW()),
('bob', 'password2', 'bob@example.com', NOW(), NOW()),
('charlie', 'password3', 'charlie@example.com', NOW(), NOW()),
('dave', 'password4', 'dave@example.com', NOW(), NOW()),
('eve', 'password5', 'eve@example.com', NOW(), NOW());
