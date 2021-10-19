const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole} = require('./helpers/helperfunctions');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'Password123!',
//         database: 'employeetracker_db'
//     },
//     console.log('Connected to employeetracker_db')
// );

function startQuestions() {
    inquirer
    .prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
            name: 'task'
        }
    )
    .then(data => {
        console.log(data);
        switch (data.task) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update an employee role': 
                updateEmployeeRole();
                break;
            // default: 
            //     startQuestions();
            //     break;
        }
    })
}

startQuestions();