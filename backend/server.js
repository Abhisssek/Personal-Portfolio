const express = require ('express')
const app = express();
const mongoose = require('mongoose');
const  route  = require('./routes/route');
require ('dotenv').config();
const logRequest = require('./logger');
// const myMiddleware = require('./myMiddleware')
const cors = require ('cors')

app.use(express.json());
app.use(logRequest)
app.use(cors())
// app.use(myMiddleware);
app.use('/api', route)

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("listening on port 4000");
    })

    console.log("mongo db is also connected");
})

