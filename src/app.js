const express = require('express');

const app = express();

app.use('/',(req, res)=>{
    res.send('Hello from Express!');
});

app.use('/test',(req, res)=>{
    res.send('Hii there, how are you Mr. Test');
});

app.use('/hello',(req, res)=>{
    res.send('Hello ji...!');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000...');
});