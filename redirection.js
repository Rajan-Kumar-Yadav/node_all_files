const http = require('http');
const  fs = require('fs')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method,req.headers);
  if  (req.url === '/') {
res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter Your Details:</h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id="female" name="gender" value="Female"><br>');
  res.write('<input type="submit" vlaue="submit">');

  res.write('</form>');
    res.write('</body>');
  res.write('</html>');
   return res.end();
  } else if(req.url.toLowerCase() === "/submit-details" && req.method === 'POST') {
    fs.writeFileSync('user.text', 'Prashant jain');
    res.statusCode = 302;
    res.setHeader('Location','/')
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