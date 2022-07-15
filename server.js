const express = require('express');
const app = express();
const generateStatement = require('./generateStatement');

app.get('/',(req,res) => {
    res.send('<h1>Passive-Aggressive API</h1>');
});

app.get('/api',(req,res) => {
    res.send(statement);
});

app.all('*',(req,res)=>{
    res.status(404).send("<h1>That resource isn't here, but have you tried looking for it?</h1>")
})

app.listen(3000, () => {
    console.log("The Passive-Aggressive API server is finally running for once!");
});


var statement = generateStatement();