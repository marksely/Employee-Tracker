INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Lead', 90000, 4),
       ('Sales Person', 80000, 4),
       ('Lead Engineer', 150000, 1),
       ('Softare Engineer', 120000, 1),
       ('Account Manager', 160000, 2),
       ('Accountant', 125000, 2),
       ('Legal Team Lead', 250000, 3),
       ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES
       ('Alan', 'Walker', 1, 0),
       ('John', 'Doe', 2, 0),
       ('Kevin', 'Hart', 3, 0),
       ('Chris', 'Brown', 4, 0),
       ('Mike', 'Chan', 5, 0),
       ('Tom', 'Hanks', 6, 0),
       ('Demetrius', 'Johnson', 7, 0),
       ('Malia', 'Brown', 8, 0);