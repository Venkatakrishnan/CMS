import express from 'express';
import OUTFORMAT, { executeSql} from '../db/executeSql';
import {personQuery, personCountQuery} from '../shared/constants';
import _ from 'lodash';

export default function() {
    const router = express.Router();
    router.get('/', (req, res, next)=>{
        const queryString = personQuery;
        const countQuery = personCountQuery;
        let limit = req.query.limit;
        let rowCount = 0;
        debugger;
        try{
            const result = executeSql(countQuery, {},
            { 
                outFormat: OUTFORMAT.OBJECT
            }).then(results=>{
                debugger;
                rowCount += parseInt(results.rows[0].TOTALCOUNT);
            });
            
            executeSql(queryString,{}, //no binds
            {
                outFormat: OUTFORMAT.OBJECT
            }, 0 , limit)
            .then(results => {
                debugger;
                res.set('X-Row-Count', rowCount);
                res.send(results);                           
            })
            .catch(err => {
                return err;
            });            
        }
        catch(err){
            next(err)
        }        
    })
    return router;
}