const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method,req.headers);
  if  (req.url === '/') {
res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
   return res.end();
  } else if(req.url === '/products') {
res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Checkout our Products</h1></body>');
  res.write('</html>');
  return res.end();
  } 
res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / share / Subscribe</h1><p>MY NAME IS RAJAN KUMAR</P></body>');
  res.write('</html>');
  res.end();
  
  
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
})