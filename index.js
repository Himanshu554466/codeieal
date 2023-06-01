const express = require('express');
const port = 8000;

const app = express();

//use express router
app.use('/' , require('./routes/index'))




app.listen(port , function(err){
    if(err){
        console.log(`Error in runnung the server : ${err}`);
    } 
    console.log(`Server is running on port : ${port}`);
});