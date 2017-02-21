import * as database from './db';
import config from '../config/dbconfig';
import {error, log} from '../shared/logger';

let dbConnectionsPool = {};

export function initDbPool(){    
    let dbConfig = { user: config.user, password: config.password, connectString: config.connectString}    
     database.createPool(dbConfig)
        .then(function() {
            log(`Database pool created using user:${config.user}, connectString:${config.connectString}`);
        })
        .catch(function(err) {
            error('Error occurred creating database connection pool', err);
            error('Exiting process');
            process.exit(0);
        });
}
export function disposeDbPool() {
    log('disposing off the db pool resources');
    log('closing the web server...');
 
    database.terminatePool()
        .then(function() {
            log('node-oracledb connection pool terminated.');
            log('exiting process...');
            process.exit(0);
        })
        .catch(function(err) {
            error(`Error occurred while terminating node-oracledb connection pool ${err}`);
            error('exiting process...');
            process.exit(0);
        });
    for (key in dbConnectionsPool) {
        dbConnectionsPool[key].destroy();
    }
}