const http = require('http');

 const  testingSyntax = require('./syntax');
 const runtime = require('./runtimesErrors');
 const logical = require('./logicalErrors')

  const requestHandler = require('./user')
const server = http.createServer(requestHandler);
// const server = http.createServer((req, res) => {
//   console.log(req.url,req.method);
//   //testingSyntax();
//   // runtime();
//   logical();
// })

const PORT = 3001;
server.listen(PORT,() => {
  console.log(`Server running on address http://localhost:${PORT}`);
});