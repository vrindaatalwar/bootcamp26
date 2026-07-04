console.log("Hello, World!");

const fs = require('fs');
fs.writeFile('hello.txt', 'Star5t pushing ur codes  to GitHub', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
})
server.listen(3000)