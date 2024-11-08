console.log("hello")
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.write('<ul><li>Green</li><li>Red</li><li>Orange</li></ul>')
    res.write('<ul><ol>Pizza</ol><ol>Taco</ol><ol>sandwitch</ol></ul>')
    res.end();
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  