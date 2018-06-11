const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    //req 요청, res응답

    res.setHeader('content-Type','text/plain');
    res.write('Hello World');
    res.end();
    })

server.listen(3000, ()=>{  //인터넷창에 IP주소 : 3000
    console.log('Server!!');
});