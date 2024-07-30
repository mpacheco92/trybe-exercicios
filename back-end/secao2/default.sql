use TryBD;

SELECT * FROM students ORDER BY name;

SELECT stu.name as Nome, MAX(spr.grade) AS 'Maior Nota', MIN(spr.grade) AS 'Menor Nota' FROM students AS stu INNER JOIN student_projects AS spr ON stu.id = spr.student_id INNER JOIN projects AS pro ON pro.id = spr.project_id WHERE stu.id = 1;

SELECT stu.name as Nome, SUM(spr.grade) AS 'Soma das Notas' FROM students AS stu INNER JOIN student_projects AS spr ON stu.id = spr.student_id INNER JOIN projects AS pro ON pro.id = spr.project_id WHERE stu.id = 1;

SELECT COUNT(*) FROM projects

SELECT stu.name as Nome, COUNT(spr.id) AS 'Soma dos Projetos' FROM students AS stu INNER JOIN student_projects AS spr ON stu.id = spr.student_id INNER JOIN projects AS pro ON pro.id = spr.project_id GROUP BY stu.id;

SELECT stu.name as Nome,
  GROUP_CONCAT(ski.name) AS Habilidade
FROM students AS stu
INNER JOIN student_skills AS ssk
  ON stu.id = ssk.student_id
INNER JOIN skills AS ski
  ON ski.id = ssk.skill_id
GROUP BY stu.name;

SELECT stu.name as Nome,
  COUNT(ski.name) AS Habilidade
FROM students AS stu
INNER JOIN student_skills AS ssk
  ON stu.id = ssk.student_id
INNER JOIN skills AS ski
  ON ski.id = ssk.skill_id
GROUP BY stu.name
HAVING COUNT(ski.name) > 3;