import debug from 'debug';
debug.log = console.info.bind(console);
const appname = process.env.APP_NAME || 'app:expressApi'
const logger = debug(appname)
const errLogger = debug(`${appname}:error`)
//export const error = debug.error = console.error.bind(console)
//export const log = debug.log = console.log.bind(console)
export function error(err){
     errLogger(err);
}
export function log(log){    
    logger(log);
}