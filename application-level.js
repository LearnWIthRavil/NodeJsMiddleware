const express = require('express');

// custom middleware create
const LoggerMiddleware = (req,res,next) =>{
    console.log('Response Timestamp',Math.floor(Date.now() /1000));
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

const app = express()

// application level middleware
app.use(LoggerMiddleware);


// users route
app.get('/users',(req,res)=>{
    console.log('Request Timestamp',Math.floor(Date.now() /1000));
    console.time
    res.json({
        'status':true
    })
   
})


// save route
app.post('/save',(req,res)=>{
    res.json({
        'status':true
    })
})

app.listen(4000,(req,res)=>{
    console.log('server running on port 4000')
})