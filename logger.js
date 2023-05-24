const EventEmitter =require ('events');



var url= 'http://mylogger.io/log';
class Logger extends EventEmitter{

 log(message){
//Send an http request
console.log(message);
this.emit('messageLogged',{id:1,url:'http://'});
}

}





//console.log(__filename);
//console.log(__dirname);


//Raise an event

module.exports  = Logger;