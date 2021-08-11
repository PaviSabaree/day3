// const events= require('events')
// const em = new events.EventEmitter;
const Helper=require('./helper')
const helper = new Helper()
helper.on('emittercalled',function (arg){
    console.log('my emitted value',arg)
})
// em.emit('emcalled','emitted sucessfully')
helper.testEmit('test emit')