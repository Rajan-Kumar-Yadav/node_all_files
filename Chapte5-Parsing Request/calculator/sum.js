const sumRequestHandler = (req,res) => {
 console.log("In sum Request Hander", req.url);
 const body = [];
 req.on('data', chunk => { 
  console.log(chunk);
  body.push(chunk);
 }
 );
 req.on('end',() => {
 const bodyStr = Buffer.concat(body).toString();
 console.log("bodyStr="+ bodyStr)
 const params = new URLSearchParams(bodyStr);

 const bodyObj = Object.fromEntries(params);
 console.log("bodyObject="+bodyObj);
 const result = Number(bodyObj.first) + Number(bodyObj.second);
 console.log(result);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Practise Set</title></head>');
  res.write('<body>');
  res.write(`<h1>Your sum is ${result}</h1>`);
 
 res.write (' </body>');
  res.write('</html>')
  return res.end();
  })
 

}
exports.sumRequestHandler  = sumRequestHandler;