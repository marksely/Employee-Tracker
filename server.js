const mysql = require('mysql2');
const inquirer = require('inquirer');
const {startQuestions, viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole} = require('./helpers/helperfunctions');

startQuestions();

