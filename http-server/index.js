// The client-side code has been moved to a separate file (e.g., public/script.js).
// This file now only contains server-side logic.


const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    serveFile('home.html', res);
  } else if (req.url === '/project') {
    serveFile('project.html', res);
  } else if (req.url === '/registration') {
    serveFile('registration.html', res);
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

function serveFile(filename, res) {
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading file');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
