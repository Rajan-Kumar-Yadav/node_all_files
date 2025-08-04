
const myntraHandler = (req,res) => {
console.log(req.url);
if (req.url === "/") {


  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra Navigation Bar</title></head>');
  res.write('<body>');
  res.write('<nav>');
  res.write('<a href="/home" style="text-decoration:none;"><h1>A. Home</h1></a>');
  res.write('<a href="/men" style="text-decoration:none;"><h1>B. Men</h1></a>');
  res.write('<a href="/women" style="text-decoration:none;"><h1>C. Women</h1></a>');
  res.write('<a href="/kids" style="text-decoration:none;"><h1>D. Kids</h1></a>');
  res.write('<a href="/cart" style="text-decoration:none;"><h1>E. Cart</h1></a>');
  res.write('</nav>');
  res.write('</body>');
  res.end();
} else if(req.url.toLowerCase() ==="/home") {
  res.write('<h1>Welcome to Myntra Home Page</h1>');
  res.write('<a href="/" style="text-decoration:none;">Go to Myntra Home</a>');
   return res.end();
} else if(req.url.toLowerCase() ==="/men") {
  res.write('<h1>Welcome to Myntra Men</h1>');
   res.write('<a href="/" style="text-decoration:none;">Go to Myntra Home</a>');
  return res.end();
} else if(req.url.toLowerCase() ==="/women") {
  res.write('<h1>Welcome to Myntra Women</h1>');
   res.write('<a href="/" style="text-decoration:none;">Go to Myntra Home</a>');
  return res.end();
} else if(req.url.toLowerCase() ==="/kids") {
  res.write('<h1>Welcome to Myntra Kids</h1>');
   res.write('<a href="/" style="text-decoration:none;">Go to Myntra Home</a>');
  return res.end();
} else if(req.url.toLowerCase() ==="/cart") {
  res.write('<h1>Welcome to Myntra Cart</h1>');
  res.write('<a href="/" style="text-decoration:none;">Go to Myntra Home</a>');
  return res.end();
}
}

module.exports = myntraHandler;