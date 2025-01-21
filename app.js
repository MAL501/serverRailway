const express = require('express')
const app = express()
app.set("view-engine","ejs");
app.get('/', function (req, res) {
    const datos=[
        {nombre:"Ana",apellidos:"Morales"},
        {nombre:"Juan",apellidos:"Juan"}

    ];
  res.render("index",{datos:datos});
})

app.listen(3000)