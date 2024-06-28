/* 

INSERT INTO company (name, key) VALUES ('XYZ Corporation', 'd7s3');

SELECT * FROM company WHERE key = 'd7s3';

ALTER TABLE company ADD COLUMN title VARCHAR;


INSERT INTO actions (companyId, redirectKey, redirectLink, ip, userAgent, country, region, city) 
VALUES (1, 'linkedin', 'https://www.linkedin.com/in/mikegulline/', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:127.0) Gecko/20100101 Firefox/127.0', 'Unknown', 'Unknown', 'Unknown');

// will retun nothing if no actions
SELECT c.name, a.* 
FROM company c 
JOIN actions a 
ON c.id = a.companyId 
WHERE c.key = 'd7s3';

// will retun company name even if no actions
SELECT c.name, a.*
FROM company c
LEFT JOIN actions a ON c.id = a.companyId
WHERE c.key = 'd7s3';

// select all companies with count where count > 0
SELECT c.name, COUNT(a.id) AS action_count
FROM company c
LEFT JOIN actions a ON c.id = a.companyId
GROUP BY c.name
HAVING COUNT(a.id) > 0;

*/
