var express = require('express'); 
var app = express(); 
var MongoClient = require('mongodb').MongoClient;

app.use(function(req, res, next) { 
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/api/getTitle',function(req,res){

    // var body = {"title": "Welcome to my First Angular App"};
    // res.status(200).send(body);
    var body = {"title":""};
    MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
        
        db.collection('trial', function (err, collection) {
            
             collection.find().toArray(function(err, items) {
                if(err) throw err;    
                body.title = items[0].title;
                res.status(200).send(body);               
            });
            
        });
        db.close();
        
                     
     });

    });



app.listen('3001', function(){
    console.log('running on 3001...');
});