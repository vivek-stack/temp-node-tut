const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to homepage')
    }
    if(req.url === '/about'){
        res.end('history')
    }
    res.end(`
    <h1>OOOPS!</h1>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)