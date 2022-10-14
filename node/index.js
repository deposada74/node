const express = require('express');
const servidor = express();
const os = require('os');
const port = 4000;
const fs = require('node:fs'); 

servidor.get('/', (require,response)=> {
    response.send(` <center><h1>Hello World</h1><br><div id='node'>🥵</div> <br> Traigame ${port} de peras </center> 
    <style>
        #node {
            font-size: 100px;
        }
    </style> <br> <h1>Datos 👌</h1> <br>
    
    Modelo ${os.cpus()[0].model}
    <br>
    Velocidad ${os.cpus()[0].speed}
    <br>
    Usuario ${os.cpus()[0].times.user}
    <br>
    Que es eso 🤨 ${os.cpus()[0].times.idle}
    <br>
    Que es eso 🤨 ${os.cpus()[0].times.irq}
    <br>
    Que es eso 🤨 ${os.cpus()[0].times.nice}
    <br>
    Que es eso 🤨 ${os.cpus()[0].times.sys}
    <br>
`);
});

servidor.listen(port, () => {
    console.log(`escuchando el puerto ${port}`);
});