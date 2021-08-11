const EventEmitter= require('events');
class Helper extends EventEmitter{
    testEmit(params){
        console.log(params)
        this.emit('emittercalled','emitted sucessfully')
    }
}
module.exports=Helper