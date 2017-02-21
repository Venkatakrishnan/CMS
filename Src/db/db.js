import oracledb from 'oracledb';
import async from 'async';
import * as config from '../config/dbconfig';

let pool;
let buildupScripts = [];
let teardownScripts = [];
let rowCount = 0;

export const OBJECT = oracledb.OBJECT;
export const ARRAY = oracledb.ARRAY;

export function createPool(config) {
    return new Promise((resolve, reject) => {
        oracledb.createPool(
            { 
                user: config.user,
                password: config.password,
                connectString: config.connectString
            },
            (err, p) => {
                if (err) {
                    return reject(err);
                } 
                //dbg.log(config);
                pool = p;
                resolve(pool);
            }
        );
    });
}

export function terminatePool() {
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.terminate(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        } else {
            resolve();
        }
    });
}

export function getPool() {
    return pool;
}

export function addBuildupSql(statement) {
    var stmt = {
        sql: statement.sql,
        binds: statement.binds || {},
        options: statement.options || {}
    };
 
    buildupScripts.push(stmt);
}

export function addTeardownSql(statement) {
    var stmt = {
        sql: statement.sql,
        binds: statement.binds || {},
        options: statement.options || {}
    };
 
    teardownScripts.push(stmt);
}

export function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            async.eachSeries(
                buildupScripts,
                (statement, callback) => {
                    connection.execute(statement.sql, statement.binds, statement.options, err => {
                        callback(err);
                    });
                },
                err => {
                    if (err) {
                        return reject(err);
                    }
 
                    resolve(connection);
                }
            );
        });
    });
}

export function execute(sql, bindParams, options, connection) {
    return new Promise((resolve, reject) => {
        connection.execute(sql, bindParams, options, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export function releaseConnection(connection) {
    async.eachSeries(
        teardownScripts,
        (statement, callback) => {
            connection.execute(statement.sql, statement.binds, statement.options, err => {
                callback(err);
            });
        },
        err => {
            if (err) {
                console.error(err); //don't return as we still need to release the connection
            }
            connection.release(err => {
                if (err) {
                    console.error(err);
                }
            });
        }
    );
}
