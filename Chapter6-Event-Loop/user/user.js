
const  fs = require('fs')
  const userRequestHandler = (req, res) => {
  console.log(req.url, req.method,);
  if  (req.url === '/') {
res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Buffering Chunks</title></head>');
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

    const body = [];
    req.on('data',chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',() => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
        console.log('Data written Successfully');
        res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
    })
      });
       
    
   
  } else {


res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / share / Subscribe</h1><p>MY NAME IS RAJAN KUMAR</P></body>');
  res.write('</html>');
  res.end();
  
    }
}




module.exports = userRequestHandler;