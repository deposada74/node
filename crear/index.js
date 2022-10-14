const express = require('express');
const servidor = express();
const port = 5000;
const fs = require('fs');
const os = require('os');





servidor.get('/', (require,response)=> {
    response.send(`${os.tmpdir()} <br>`);
});


servidor.listen(port,()=>{
    console.log('Hello world');
});