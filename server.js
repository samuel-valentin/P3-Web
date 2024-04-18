const express = require('express');
const fs = require('fs');
const router = require('./app/controllers/router');

const app = express();
const port = 3000;


app.use(express.json())
app.use(router);

/*
var products = fs.readFile('./app/data/products.json','utf-8',function(err,data){
    if(err){
        console.log("Somenthing went wrong :(");
    }
    else{
        console.log("Working!");
        console.table(JSON.parse(data));
    }
});*/

app.get('/', (req, res) => {
    console.log("e-commerce app practica 3");
    res.send("e-commerce app practica 3");
});

app.listen(port, () => {
    console.log("Practica 3 app listening on port " + port);
});