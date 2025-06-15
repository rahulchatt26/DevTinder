const express = require('express');

const app = express();


app.get('/user',(req, res)=>{
    res.send({firstName:'Rahul', lastName:'Chatterjee'});
});

app.post('/user',(req, res) =>{
    // inserting the user to DB
    res.send('User created successfully');
});

app.put('/user',(req, res) =>{
    // updating the user in DB
    res.send('User updated successfully');
});

app.delete('/user',(req, res) =>{
    // deleting the user from DB
    res.send('User deleted successfully');
});

// Using route parameters
app.post('/user/:userId/:passsword',(req, res) =>{
    // inserting the user to DB
    console.log(req.params)
    res.send('User created successfully');
});

// Using query parameters
app.post('/user',(req, res) =>{
    // inserting the user to DB
    console.log(req.query)
    res.send('User created successfully');
});

// Using regular expressions in routes
app.use(/.*ab$/,(req, res)=>{
    res.send('Hii there, how are you Mr. Test');
});

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000...');
});
