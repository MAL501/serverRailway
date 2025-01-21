require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.send('Bienvenido a mi aplicacion web')
})

app.post('/saludo', (req,res)=>{
    const nombre = req.body.nombre || 'invitado';
    const contrasena = req.body.contrasena || '1234';
    res.send('Saludo ' + nombre + ' ' + contrasena)
})

app.get('/precios', (req,res)=>{
    res.send('<h1>>Precios</h1><hr><p>Ordenador:1000</p>')
})
app.get('*', (req,res)=>{
    res.sendFile(__dirmane + '/public/404.html')
})

app.post('/factorial', (req,res)=>{
    const numero = req.body.numero;
    if(numero===undefined || isNaN(numero)){
        return res.status(400).send('Numero no valido');    
    }
    const factorial = (n)=>{
        if(n===0) return 1;
        return n * factorial(n-1);
    }
    const resultado = factorial(Number(numero));
    res.send('el facotirla de  ' + numero + 'es ' + resultado)
})

app.listen(port,
    ()=>console.log(`Servidor escuchando por el puerto ${port}`));