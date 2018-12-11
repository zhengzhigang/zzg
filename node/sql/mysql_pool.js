import {dev} from '../config/config.js'
import mysql from 'mysql'

const pool = ysql.createPool(dev.MYSQL);
let query = (sql, args) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err);
            } else {
                connection.query(sql, args, (err, sult) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                    connection.release();
                })
            }
        })
    })
}

export default query;