SELECT employee.id, employee.first_name AS `first name`, employee.last_name AS `last name`, role.title, department.name AS `department`, role.salary, CONCAT(supervisor.first_name, ' ',supervisor.last_name) AS manager_id
FROM employee
JOIN role
ON employee.role_id = role.id
JOIN department
ON role.department_id = department.id
LEFT JOIN employee supervisor 
ON supervisor.id = employee.manager_id
ORDER BY employee.id;