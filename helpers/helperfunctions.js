const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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
    
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, data) => {
        if(err) {
            res.json(err);
        } else {
            console.table(data);
            startQuestions();
        }
    });
};

const viewRoles = () => {
    
    const sql = `SELECT * FROM role;`;

    db.query(sql, (err, data) => {
        if(err) {
            return err;
        } else {
            console.table(data);
            startQuestions();
        }
    });
 };

const viewEmployees = () => {
    
    const sql = `SELECT * FROM employee;`;

    db.query(sql, (err, data) => {
        if(err) {
            return err;
        } else {
            console.table(data);
            startQuestions();
        }
    });
};


const addDepartment = () => {
    inquirer
    .prompt(
        {
            type: 'text',
            message: 'What is the name of the department?',
            name: 'Depname'
        }
    ).then((data) => {
        console.log(data.Depname)
        const sql = `INSERT INTO department (name)
        VALUE ${data.Depname}`;

        db.query(sql, params, (err,result) => {
            if(err) {  
                return err;
             } else {
            res.json('Successfully added a new department');
            }
         });
    })
};

// const addRole = () => {

// }; 

// const addEmployee = () => {

// };

// const updateEmployeeRole = () => {

// };

module.exports = {
    startQuestions,
    viewDepartments,
    viewRoles,
    viewEmployees,
    // addDepartment,
    // addRole,
    // addEmployee,
    // updateEmployeeRole
};