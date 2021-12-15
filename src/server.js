const { createServer } = require('http');

const server = createServer((req, res) => {
    res.end('Hello World');
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('Server listening on port', PORT));
