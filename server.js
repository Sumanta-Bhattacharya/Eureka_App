const express = require('express');
const serverConfig = require('./configs/server_config')


const app = express();
const port = serverConfig.PORT;

app.listen(port, ()=>{
    console.log(`sarver started on the port number ${port}`);
})