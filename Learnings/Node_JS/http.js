



// const server=http.createServer((req,res)=>{
//     res.statusCode200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello from Node.js!');
// })

// server.listen(3000,'127.0.0.1',()=>{
//     console.log('Server running at http://127.0.0.1:3000/');
// })





// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');


//   if (req.method === 'GET' && req.url === '/') {
//     res.statusCode = 200;
//     res.end('<h1>Welcome to the Home Page!</h1>');
  
 
//   } else if (req.method === 'POST' && req.url === '/submit') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       res.statusCode = 200;
//       res.end(`<h1>Form Submitted! Data: ${body}</h1>`);
//     });


//   } else if (req.method === 'PUT' && req.url === '/update') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       res.statusCode = 200;
//       res.end(`<h1>Data Updated! New Data: ${body}</h1>`);
//     });


//   } else if (req.method === 'DELETE' && req.url === '/delete') {
//     res.statusCode = 200;
//     res.end('<h1>Data Deleted!</h1>');


//   } else if (req.method === 'PATCH' && req.url === '/patch') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       res.statusCode = 200;
//       res.end(`<h1>Data Patched! New Data: ${body}</h1>`);
//     });


//   } else if (req.method === 'OPTIONS') {
//     res.statusCode = 200;
//     res.setHeader('Allow', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     res.end('<h1>Allowed Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS</h1>');
  

//   } else {
//     res.statusCode = 404;
//     res.end('<h1>Page Not Found</h1>');
//   }
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });






// const server = http.createServer((req, res) => {
//   const filePath = path.join(__dirname, 'Node_JS', req.url === '/' ? 'index.html' : req.url);
//   const extname = path.extname(filePath);

//   let contentType = 'text/html';
//   if (extname === '.css') {
//     contentType = 'text/css';
//   } else if (extname === '.js') {
//     contentType = 'application/javascript';
//   }

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html');
//       res.end('<h1>File Not Found</h1>');
//     } else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', contentType);
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });
 


// const http = require('http');
// const fs = require('fs'); 

// const server = http.createServer((req, res) => {
 
//   if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile('index.html', (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Error reading HTML file');
//       } else {
//         res.end(data);
//       }
//     });
//   }


//   else if (req.url === '/data' && req.method === 'POST') {
//     let body = '';
    

//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', () => {
    
//       console.log('Received POST data:', body);
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(`Received POST data: ${body}`);
//     });

//     req.on('error', (err) => {
//       res.statusCode = 400;
//       res.end('Error handling request');
//     });
//   } 
  
 
//   else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    res.setHeader('Content-Type', 'text/plain');
    
    if (method === 'GET' && url === '/') {
      res.end('GET: Hello from Node.js');
    } else if (method === 'POST' && url === '/submit') {
      res.end('POST: ' + body);
    } else if (method === 'PUT' && url === '/update') {
      res.end('PUT: ' + body);
    } else if (method === 'DELETE' && url === '/delete') {
      res.end('DELETE: Request received');
    } else {
      res.statusCode = 404;
      res.end('404 Not Found');
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('✅ Server is running at http://127.0.0.1:3000');
});
