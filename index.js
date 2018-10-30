const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Hello Kaake');
});
app.listen(3000,()=>{console.log("pahuch gaye kya")});