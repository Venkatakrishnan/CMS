import express from 'express';
import fs from 'fs';
import _ from 'lodash';
//import {error, log} from '../shared/logger';

export default function(jsonfilepath) {
    const router = express.Router();
    router.get('/', (req, res, next)=>{
        debugger;
        //log('inside /users')
        try {
            res.set('Content-Type', 'application/json')
            //Deprecated & not recommended as the below code goes against node patterns. Since it is just a mock went with this approach but instead it should be done with promises.
            const fileContents = fs.readFileSync(jsonfilepath, {encoding: 'utf8'});
            debugger;
            res.send(fileContents);    
            //log('finished processing /users')
        }
        catch(err){
            next(err);
        }
    })
    return router;
}