--Creating database
CREATE DATABASE crudcambridge;

--Using database
USE crudcambridge;

--Creating table Empleados
CREATE TABLE Empleados (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    area VARCHAR(100) NOT NULL,
    tipo_empleado VARCHAR(50) NOT NULL,
    oficina VARCHAR(50) NOT NULL,
    tipo_contrato VARCHAR(50),
    salon VARCHAR(50)
);

--Creating table Areas
CREATE TABLE Areas (
    idArea INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombreArea VARCHAR(50) NOT NULL
);

--Creating table Oficina
CREATE TABLE Oficinas (
    idOficina INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombreOficina VARCHAR(50) NOT NULL,
    areaOficina VARCHAR(50) NOT NULL
);

--Creating table Salones
CREATE TABLE Salones (
    idSalon INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombreSalon VARCHAR(50) NOT NULL
);

--Show all tables
SHOW TABLES;

--Describe tables
DESCRIBE Empleados;
DESCRIBE Areas;
DESCRIBE Oficinas;
DESCRIBE Salones;

--Eliminate database
DROP DATABASE crudcambridge;

--Eliminate tables
DROP TABLE Empleados;
DROP TABLE Areas;
DROP TABLE Oficinas;
DROP TABLE Salones;