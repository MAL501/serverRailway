require('dotenv').config();
const express=require("express");
const app = express();
const port= 8099;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Bienvenido a mi aplicación web")
})

app.get("/saludo",(req,res)=>{
    const nombre=req.query.nombre ||"invitado";
    const passwd=req.query.passwd ||"invitado apellidos";
    res.send("Hola "+nombre+"<br>Filtramos tu contraseña: "+passwd);
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(port,()=>{
    console.log(`Servidor escuchando por el puerto ${port}`)
})




app.get("*",(req,res)=>{
    res.sendFile(__dirname+"/public/404.html");
})