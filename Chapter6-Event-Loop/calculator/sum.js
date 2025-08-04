const sumRequestHandler = (req,res) => {
 console.log("1. In sum Request Hander", req.url);
 const body = [];
 let result;
 req.on('data', chunk => { 
 
  body.push(chunk);
   console.log("2.chunk Came");
 }
 );
 req.on('end',() => {
   console.log("3. End event came");
 const bodyStr = Buffer.concat(body).toString();

 const params = new URLSearchParams(bodyStr);

 const bodyObj = Object.fromEntries(params);

  result = Number(bodyObj.first) + Number(bodyObj.second);
 console.log(result);

 
  })
  console.log("4. Sending response");
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Practise Set</title></head>');
  res.write('<body>');
  res.write(`<h1>Your sum is ${result}</h1>`);
 
 res.write (' </body>');
  res.write('</html>')
  return res.end();

}
exports.sumRequestHandler  = sumRequestHandler;