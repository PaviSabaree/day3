// simple module:
var log={
    info:function(info){
        console.log("info!:"+info);
    },
    warning:function(warning){
        console.log("warning!:"+warning);
    },
    error:function(error){
        console.log("error!:"+error);
    }
}
module.exports= log

// obj with fn:
exports.log=function(msg){
    console.log(msg);
};

// anonymous fn:
module.exports= function(msg){
    console.log(msg);
};