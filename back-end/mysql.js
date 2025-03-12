import mysql2 from 'mysql2';

const poll = mysql2.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "346484002010",
    port: "3306",
    database: "servidor"
});

export const querySync = (query, data, {} = {}) => {
    return new Promise((res, rej) => {
        poll.getConnection((error, connection) => {
            if (error) {
                rej(error);
            }
            connection.query(query, data, (error, results) => {
                connection.release();
                if (error) {
                    rej(error);
                }
                res(results);
            });
        });
    });
}