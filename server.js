// server file
const express = require('express');
const app = express();
const generateStatement = require('./generateStatement');

app.use(express.static('public')); // for front-end file access

app.get('/',(req,res) => {
    res.status(200).sendFile('views/index.html', { root : __dirname});
});

app.get('/api',(req,res) => {
    let statement = generateStatement(1);
    res.send(statement);
});

app.all('*',(req,res)=>{
    res.status(404).send("<h1>That resource isn't here, but have you tried looking for it?</h1>")
})

app.listen(3000, () => {
    console.log("The Passive-Aggressive API server is finally running for once!");
});


var statement = generateStatement();