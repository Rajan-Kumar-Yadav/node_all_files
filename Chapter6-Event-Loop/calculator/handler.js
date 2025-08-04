  const {sumRequestHandler} = require('./sum');

const requestHandler = (req,res) => {
 console.log(req.url,req.method);
 if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Practise Set</title></head>');
  res.write('<body>');
  res.write('<h1>Welcome to Calculator</h1>');
  res.write('<a href="/calculator">Go to Calculator</a>');
 res.write (' </body>');
  res.write('</html>')
  return res.end();
 } else if(req.url.toLowerCase() === '/calculator') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Practise Set</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Here is the Calculator</h1>');
  res.write('<form action="/calculate-result" method="POST">')
  res.write('<input type="text" placeholder="First Num" name="first"/>');
  res.write('<input type="text" placeholder="second Num" name="second"/>');
  res.write('<input type="submit" value="Sum"/>');
  res.write('</form>');
  return res.end();
 } else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
   return sumRequestHandler(req,res);
 }
 res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Practise Set</title></head>');
  res.write('<body>');
  res.write('<h1>404 page not Exist</h1>');
  res.write('<a href="/">Go to Home</a>');
 res.write (' </body>');
  res.write('</html>')
  return res.end();
}
exports.requestHandler = requestHandler;