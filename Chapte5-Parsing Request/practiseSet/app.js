const http = require('http');

const myntraHandler = require('./myntra')


 const server = http.createServer( myntraHandler);

 const PORT = 3000;
 server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
 })