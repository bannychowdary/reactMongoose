var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var friend = require('./model/friend')
var cors = require('cors')

var app= express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.set('debug', true)

mongoose.connect('mongodb://localhost:27017/reactfriend')

var db = mongoose.connection

db.on('error', function(){
    console.log("Error in connection")
})

db.once('open',function(){
    console.log("Connection successful")
})

app.get("/all",function(req,res){
    friend.find({},function(err,data){
        res.json(data)
    }

    )
})

app.listen(1234)