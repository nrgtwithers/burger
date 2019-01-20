DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT true,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM burgers;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
