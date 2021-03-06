const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3444, ()=>{
    console.log('Servidor funcionando en el puerto 3444');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

