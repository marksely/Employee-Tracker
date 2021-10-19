const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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
    app.get('/api/departments', (req, res) => {
        const sql = `SHOW * FROM department;`;

        db.query(sql, (err, rows) => {
            if(err) {
                res.json(err);
                return;
            } else {
                res.json({
                    message: 'Departments',
                    data: rows
                });
            }
        });
    });
};

const viewRoles = () => {
    app.get('/api/roles', (req, res) => {
        const sql = `SHOW * FROM role;`;

        db.query(sql, (err, rows) => {
            if(err) {
                res.json(err);
                return;
            } else {
                res.json({
                    message: 'Roles',
                    data: rows
                });
            }
        });
    });
};

const viewEmployees = () => {
    app.get('/api/employees', (req, res) => {
        const sql = `SHOW * FROM employee;`;

        db.query(sql, (err, rows) => {
            if(err) {
                res.json(err);
                return;
            } else {
                res.json({
                    message: 'Employees',
                    data: rows
                });
            }
        });
    });
};

const addDepartment = () => {
    app.post('/api/new-department', (req ,res) => {
        const sql = `INSERT INTO department (id, name)
        VALUES (?)`;
        const params = [req.body.id, req.body.name];

        db.query(sql, params, (err,result) => {
            if(err) {
                res.json(err);
                return;
            } else {
                res.json('Successfully added a new department');
            }
        });
    });
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