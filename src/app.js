const express = require('express');

const app = express();


app.use('/user',[
    (req, res, next)=>{
    console.log('1st request handler');
    //res.send('1st respoense');
    next();
},
(req, res, next)=>{
    console.log('2nd request handler');
    //res.send('2nd response');
    next();
},
[(req, res, next)=>{
    console.log('3rd request handler');
    //res.send('3rd response');
    next();
},
(req, res, next)=>{
    console.log('4th request handler');
    //res.send('4th response');
    next();
}],
(req, res, next)=>{
    console.log('5th request handler');
    res.send('5th response');
}]);



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});