import express from 'express';
import cors from 'cors';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import personRouter from './routers/person-router';
import usersRouter from './routers/users-router';
import {error, log} from './shared/logger';
import {initDbPool, disposeDbPool} from './db/dbPool';

let staticFilePath = __dirname
let jsonfilepath = __dirname+'\\mock\\users.json'

log('api starting up...')
const app = express()
const port = process.env.PORT || 3001

app.set('port', port)
process.on('unhandledRejection', (err)=>{
    disposeDbPool()
    error(`unhandled-rejection: ${err}`)
    process.exit(1)
})
app.use(morgan('dev'))
initDbPool()
//For CORS headers and errors 
app.use(cors());
app.get('/', (req, res) => {
    debugger;
    res.send(`Welcome to express api!
This api is written in node.js & express framework. It uses the node-oracledb lib for node.js 
which is a generic API which works as the Oracle Database access layer to perform data operations connected to an Oracle Db data store.
`)
})
app.use('/users', usersRouter(jsonfilepath))
app.use('/persons', personRouter())
app.use('/readme.md', (req,res,next)=>{
    app.use(compression())
    app.use(express.static(staticFilePath))
    res.set('Content-Type', 'text/markdown');
    res.sendFile(path.join(staticFilePath, '../Readme.md'))
})
app.use((err,req,res,next)=>{
    error(err.stack);
    disposeDbPool();
    res.status(500).send(`error: ${err}`)
})
app.listen(port, () => {
    const listeningPort = parseInt(port);
    log(`Find the server at port: ${listeningPort}`);
})
