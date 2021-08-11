var http= require('http');
var server= http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end();
    }
    else if(req.url=='/student'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<html><body><p>This is student page</p></body></html>');
        res.end();
    } else if(req.url=='/admin'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<html><body><p>This is admin page</p></body></html>');
        res.end();
     } 
    //  JSON response
     else if(req.url=='/data'){
         res.writeHead(200,{'Content-Type':'application/json'});
         res.write(JSON.stringify({message:"Hello World"}));
         res.end();
     }
     else
    res.end('Invalid Request!');
});
server.listen(5000);
console.log('Nodejs web server at port 5000 is running...')