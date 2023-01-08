const maria = require('mysql');

const conn = maria.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '333666999',
        database: 'STUDY'
    }
);

module.exports= conn;

