const express = require('express');
const app = express();
const path = require('path');


const actualizacion = false
if (actualizacion == false){
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname,"./views/home.html"))
    })
    app.get('/register', (req, res) => {
        res.sendFile(path.resolve(__dirname,"./views/register.html"))
    })
    app.get('/login',(req, res) => {
        res.sendFile(path.resolve(__dirname,"./views/login.html"))
    })
} else {
    app.get('*', (req, res) => {
        res.send("Sitio en reparacion")
    })
}
app.use(express.static(path.join(__dirname, 'public')))

const serverLocal = false
if (serverLocal == true) {
app.listen(80,()=>{
    console.log("servidor corriendo en el puerto 80");
})
} else {
    app.listen(3000,()=>{
        console.log("servidor corriendo en el puerto 3000");
    })
}