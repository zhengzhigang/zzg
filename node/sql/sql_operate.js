import mysql from 'mysql';
import sql_config from '../sql/config';

export default {
    connect(database) {
        return mysql.createConnection(sql_config.sql(database));
    },
    add_sql(table, field) {
        return `INSERT INTO ${table}(${field}) VALUES(0,?,?)`;
    },
    count(db) {
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) FROM message', (err, result) => {
                if (err) {
                    reject (err);
                }
                let counts = result[0]['COUNT(*)'];
                resolve(counts);
            })
        });
    },
    add(db, addSql, field) {
        return new Promise((resolve, reject) => {
            db.query(addSql,field,function (err, result) {
                if(err){
                    reject(err);
                }
                resolve(0)
            });
        });
    }
}