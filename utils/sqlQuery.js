export const createEmployeeTableQuery = `
    CREATE TABLE employee_details(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        age SMALLINT NOT NULL CHECK(age>17),

    )
`