CREATE TABLE EMPLOYEES(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO EMPLOYEES(first_name, last_name, email)
VALUES ('John', 'Doe', 'john.doe@example.com'),
    ('Jane', 'Doe', 'jane.doe@example.com'),
    ('John', 'Smith', 'john.smith@example.com'),
    ('Jane', 'Smith', 'jane.smith@example.com'),
    ('Waltwer', 'White', 'walter.white@example.com'),
    ('Jesse', 'Pinkman', 'jesse.pinkman@example.com');