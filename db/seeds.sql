INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
       (2, 'Finance'),
       (3, 'Legal'),
       (4, 'Sales');

INSERT INTO role (id, title, salary, department_id) 
VALUES (1,'Sales Lead', 90000, 4)
       (2,'Sales Person', 80000, 4)
       (3,'Lead Engineer', 150000, 1)
       (4,'Softare Engineer', 120000, 1)
       (5,'Account Manager', 160000, 2)
       (6,'Accountant', 125000, 2)
       (7,'Legal Team Lead', 250000, 3)
       (8,'Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
       ('Alan', 'Walker', 1)
       ('John', 'Doe', 2)
       ('Kevin', 'Hart', 3)
       ('Chris', 'Brown', 4)
       ('Mike', 'Chan', 5)
       ('Tom', 'Hanks', 6)
       ('Demetrius', 'Johnson', 7)
       ('Malia', 'Brown', 8);