const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js + Docker + Jenkins\n");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
