const express = require('express');
const port = 8000;

const app = express();

//use express router
app.use('/' , require('./routes'));
// app.get('/profile' , function(req,res){
//     return res.end('<h1>Hello</h1>')
// })

//setup the view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');




app.listen(port , function(err){
    if(err){
        console.log(`Error in runnung the server : ${err}`);
    } 
    console.log(`Server is running on port : ${port}`);
});