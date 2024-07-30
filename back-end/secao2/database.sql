SELECT * FROM students
ORDER BY name;

SELECT stu.name AS Estudante,
    pro.name AS Projeto FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
INNER JOIN projects AS pro
    ON pro.id = spr.project_id
WHERE stu.id = 1
ORDER BY Projeto;

SELECT * FROM skills
WHERE kind LIKE 'Hard%'
LIMIT 3;

SELECT
    stu.name AS Estudante,
    spr.grade AS Nota
FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
WHERE stu.id = 1
ORDER BY nota DESC
LIMIT 1;

-------------------------------

SELECT
    stu.name AS Estudante,
    MAX(spr.grade) AS 'Maior nota',
    MIN(spr.grade) AS 'Menor nota'
FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
WHERE stu.id = 1;

SELECT stu.name AS Estudante,
    SUM(spr.grade) AS 'Soma das Notas'
FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
INNER JOIN projects AS pro
    ON pro.id = spr.project_id
GROUP BY stu.name;

--------------------------

SELECT stu.name AS Estudante,
    COUNT(pro.name) AS 'Qtd Projetos'
FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
INNER JOIN projects AS pro
    ON pro.id = spr.project_id
GROUP BY stu.name
ORDER BY COUNT(pro.name) DESC;

SELECT pro.name AS Projetos,
   COUNT(spr.id) AS 'Estudantes'
FROM projects AS pro
INNER JOIN student_projects AS spr
    ON pro.id = spr.project_id
INNER JOIN students AS stu
    ON stu.id = spr.student_id
GROUP BY pro.name
ORDER BY Estudantes, Projetos;

SELECT stu.name AS Estudante,
    GROUP_CONCAT(ski.name) AS 'Habilidades'
FROM students AS stu
INNER JOIN student_skills AS ssk
    ON stu.id = ssk.student_id
INNER JOIN skills AS ski
    ON ski.id = ssk.skill_id
GROUP BY stu.name
ORDER BY stu.name;

------------------------------

SELECT pro.name AS Projetos,
   COUNT(spr.id) AS 'Estudantes'
FROM projects AS pro
INNER JOIN student_projects AS spr
    ON pro.id = spr.project_id
INNER JOIN students AS stu
    ON stu.id = spr.student_id
GROUP BY pro.name
HAVING COUNT(spr.id) >= 3;

SELECT stu.name AS Estudante,
    COUNT(pro.name) AS 'Qtd Projetos'
FROM students AS stu
INNER JOIN student_projects AS spr
    ON stu.id = spr.student_id
INNER JOIN projects AS pro
    ON pro.id = spr.project_id
GROUP BY stu.name
HAVING COUNT(pro.name) > 3;