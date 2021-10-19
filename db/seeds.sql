INSERT INTO department (id, name)
VALUES (12, 'Engineering'),
       (23, 'Finance'),
       (34, 'Legal'),
       (45, 'Sales');

INSERT INTO role (id, title, salary, department_id) 
VALUES (11,'Sales Lead', 90000, 45),
       (22,'Sales Person', 80000, 45),
       (33,'Lead Engineer', 150000, 12),
       (44,'Softare Engineer', 120000, 12),
       (55,'Account Manager', 160000, 23),
       (66,'Accountant', 125000, 23),
       (77,'Legal Team Lead', 250000, 34),
       (88,'Lawyer', 190000, 34);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES
       ('Alan', 'Walker', 11, 0),
       ('John', 'Doe', 22, 0),
       ('Kevin', 'Hart', 33, 0),
       ('Chris', 'Brown', 44, 0),
       ('Mike', 'Chan', 55, 0),
       ('Tom', 'Hanks', 66, 0),
       ('Demetrius', 'Johnson', 77, 0),
       ('Malia', 'Brown', 88, 0);