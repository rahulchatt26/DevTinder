const express = require('express');
const {adminAuth, userAuth} = require('./middlewares/auth');

const app = express();

app.use('/admin',adminAuth);
app.use('/user', userAuth);

app.get('/user/profile', (req, res)=>{
    res.send('User profile data sent');
});


app.use('/admin/getAllUser',(req, res, next)=>{
    // Logic for fetch all users data
    res.send('All users data send');
});

app.use('/admin/deleteUser',(req, res)=>{
    console.log('Delete user request received');
    // Logic to delete a user data
    res.send('User data deleted successfully');
});



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});