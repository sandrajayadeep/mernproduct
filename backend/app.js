const express = require('express');//to build backend quickly
const app = express();//instance of express
const cors = require('cors');//for cross origin policy
const port =8745;
app.use(cors());//use this cors package when server starts up
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
require('./dB')

app.listen(port,()=>(
    console.log(`server is running on port ${port}`)
));