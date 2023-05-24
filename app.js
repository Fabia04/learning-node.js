function sayHello(name){
    console.log('Hello '+name);
}

//sayHello('Samuel');

console.log(); //global

//console.log(module)
//const log = require('./logger.js');
//console.log(log);
//log.log('message');
//log('message');

/*const path = require('path');

 var pathObject= path.parse(__filename);
 console.log(pathObject);


 const os = require('os');
var totalmemory=os.totalmem();
var freememory= os.freemem();
console.log('total memory' + totalmemory+ ' free memory' + freememory);

console.log(`Total memory : ${totalmemory}`);

const fs =require('fs');
const files=fs.readdirSync('./');
console.log(files);


fs.readdir("./",function(err,files){
    if(err) console.log("error",err)
    else console.log('result',files);
})

*/
const EventEmitter =require ('events');

const Logger = require('./logger');
const logger = new Logger() ;
//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log("listener called",arg);
});




logger.log('message');




const http= require('http');

const server = http.createServer((req,res)=>{
    if(req.url === './')
    {
        res.write('hello world');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
})

server.on('connection',(socket) => {
    console.log('new  connection ...');
})
server.listen(3000);

console.log('listening on port 3000..')








