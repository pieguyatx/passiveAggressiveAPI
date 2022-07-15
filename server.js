const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("JSON goes here");
});

app.listen(3000, () => {
    console.log("The Passive-Aggressive API server is finally running for once!");
});