const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

let employeeArr = ['Alan Walker', 'John Doe', 'Kevin Hart', 'Chris Brown', 'Mike Chan', 'Tom Hanks', 'Demetrius Johnson', 'Malia Brown'];
let roleArr = ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'];

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
    
    const sql = `SELECT role.id, role.title, department.name AS 'department', role.salary
    FROM role
    INNER JOIN department
    ON role.department_id = department.id
    ORDER BY role.id;`;

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
    
    const sql = `SELECT employee.id, employee.first_name AS 'first name', employee.last_name AS 'last name', role.title, department.name AS 'department', role.salary, CONCAT(supervisor.first_name, ' ',supervisor.last_name) AS manager_id
    FROM employee
    JOIN role
    ON employee.role_id = role.id
    JOIN department
    ON role.department_id = department.id
    LEFT JOIN employee supervisor 
    ON supervisor.id = employee.manager_id
    ORDER BY employee.id;`;

    db.query(sql, (err, data) => {
        if(err) {
            console.log(err);
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
        const sql = `INSERT INTO department SET ?`;

        db.query(sql, {name: data.Depname}, (err,result) => {
            if(err) {  
                return err;
            } else {
                console.log('Successfully added a new department');
                startQuestions();
            }
         });
    })
};

const addRole = () => {
    inquirer
    .prompt([
        {
            type: 'text',
            message: 'What is the name of the role?',
            name: 'role'
        },
        {
            type: 'number',
            message: 'What is the salary of this role?',
            name: 'salary'
        },
        {
            type: 'list', 
            message: 'What department does this role belong to?',
            name: 'dep',
            choices: ['Engineering', 'Finance', 'Sales', 'Legal', 'Service']
        }
    ])
    .then((data) => {
        console.log(data);
        const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${data.role}', ${data.salary}, 3)`;
        roleArr.push(data.role);
        //const tableValues = [data.newRole, data.salary, 0];
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Role successfully added');
                startQuestions();
            }
        })
    })
}; 

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'text',
            message: 'What is the employees name?',
            name: 'name'
        },
        {
            type: 'text',
            message: 'What is the employees last name?',
            name: 'last'
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
            name: 'role'
        }
    ])
    .then((data) => {
        console.log(data);
        const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${data.name}', '${data.last}', 3)`;
        employeeArr.push(data.name + ' ' + data.last);

        db.query(sql,(err,results) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Employee successfully added");
                startQuestions();
            }
        });
    })
};

const updateEmployeeRole = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which employees role do you want to update?',
                choices: employeeArr,
                name: 'employee'
            },
            {
                type: 'list',
                message: 'What role do you want to assign to this employee?',
                choices: roleArr,
                name: 'role'
            }
        ])
        .then((data) => {
            const sql = `UPDATE employee SET role = ${data.role} WHERE id = ${employee.id}`;
            db.query(sql, (err,result) => {
                if(err) {
                    return err;
                } else {
                    startQuestions();
                }
            });

        })
};

 module.exports = {
     startQuestions
};