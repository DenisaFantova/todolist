# initial db script

-- DROP DATABASE todolist; -- use when the database exists

CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
todoTask char (30) NOT NULL
);

INSERT tasks(id, todoTask) VALUES(1,'First todo')