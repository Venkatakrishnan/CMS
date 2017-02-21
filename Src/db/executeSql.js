import async from 'async';
import _ from 'lodash';
import {personQuery} from '../shared/constants';
import {getConnection, execute, releaseConnection, OBJECT, ARRAY} from './db';
import {error, log} from '../shared/logger';

const OUTFORMAT = { OBJECT: OBJECT, ARRAY: ARRAY };

export function executeSql(sql, bindParams, options, offset, limit) {
    let maxRows = parseInt(limit);
    options.isAutoCommit = true;
    options.extendedMetaData = true;
    options.maxRows = maxRows || 100;
    return new Promise((resolve, reject) => {
        getConnection()
            .then(connection => {
                execute(sql, bindParams, options, connection)
                    .then(results => {
                        resolve(results);
                        process.nextTick(() => {
                            releaseConnection(connection);
                        });
                    })
                    .catch(err => {
                        error(`error while execuing the sql statement ${sql} in database: ${err}`)
                        reject(err);
                        process.nextTick(() => {
                            releaseConnection(connection);
                        });
                    });
            })
            .catch(err => {
                error(`error while execuing the sql statement ${sql} in database\n error: ${err}`)
                //console.error(`error while execuing the sql statement ${sql} in database: ${err}`)                
                reject(err);
            });
    });
}
export default OUTFORMAT;