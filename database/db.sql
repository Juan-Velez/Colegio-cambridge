-- ceating databesa
CREATE DATABASE crudcambridge;

--using database
use crudcambridge;

--Creating a table
CREATE TABLE Empleados (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    area VARCHAR(100) NOT NULL,
    tipo_empleado VARCHAR(50) NOT NULL,
    oficina VARCHAR(50) NOT NULL,
    tipo_contrato VARCHAR(50)
);

--oficina--

CREATE TABLE Areas (
    idArea INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombreArea VARCHAR(50) NOT NULL
);

CREATE TABLE Oficinas (
    idOficina INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombreOficina VARCHAR(50) NOT NULL,
    areaOficina VARCHAR(50) NOT NULL
);

--show all tables
SHOW TABLES;

--describe the table
describe empleado;

--Eliminar tabla
DROP TABLE Oficinas;
