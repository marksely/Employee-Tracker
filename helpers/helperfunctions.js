const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Password123!',
        database: 'employeetracker_db'
    },
    console.log('Connected to employeetracker_db')
);

const viewDepartments = () => {

};

const viewRoles = () => {

};

const viewEmployees = () => {

};

const addDepartment = () => {

};

const addRole = () => {

}; 

const addEmployee = () => {

};

const updateEmployeeRole = () => {

};

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};