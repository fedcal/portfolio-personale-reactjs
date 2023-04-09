import express from 'express';
import fs from 'fs';
import path from "path";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from  'react-router-dom/server'
import App from '../src/App';


const app = express();
app.use('*',(req,res) =>{
    fs.readFile(path.resolve('./dist/index.html'),'utf-8',(err,data)=>{
        if(err){
            console.err(err)
            return res.status(590)._construct('Some error')
        }

        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App/>
            </StaticRouter>
        )

        return res.send(data.replace('<div id="root"></div>',`<div id="root">${html}</div>`))
    });
});


app.listen(3030, () => {
    console.log("App running");
});