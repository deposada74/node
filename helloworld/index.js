// Se vincula el modulo instalado con npm install express
const express = require('express')
// 
const servidor = express();
const port = 2022;
// res=>response req=>require
servidor.get('/', (require,response)=> {
    response.send(`Hello World`);
});


servidor.listen(port,()=>{
    console.log('Hello world');
});