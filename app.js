var express =require('express');
var routes= require('./routes');
var app=express();
const bodyParser=require("body-parser");
const userRouter=require('./routes')
app
    .use(bodyParser.json({limit:"50mb"}))
    .use('/Employee',userRouter)

module.exports=app;

app.listen(3003);