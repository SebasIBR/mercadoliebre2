const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000,()=>{
    console.log("servidor corriendo en el puerto 3000");
})