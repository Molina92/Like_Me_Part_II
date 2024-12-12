-- Active: 1729855615076@@127.0.0.1@5432@likeme@publicad2@public

-- Create database
CREATE DATABASE likeme;

-- Create table
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);




