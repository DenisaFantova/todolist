# initial db script

DROP DATABASE todolist;

CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
todoTask char (30) NOT NULL
);