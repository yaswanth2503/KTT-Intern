// const fs=require('fs');
// console.log("Start reading the file");

// fs.readFile('./Node.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log("File content:",data);
    
// });

const fs = require('fs').promises;

console.log("Start reading the file...");

fs.readFile('Node.txt', 'utf8')
  .then(data => {
    // console.log("File content:", data);
  })
  .catch(err => {
    console.error("Error reading file:", err);
  });

console.log("This will print while the file is being read!");

/*
 promise chaining
fs.readFile('Node.txt', 'utf8')
  .then(data1 => {
    console.log(data1);
    return fs.readFile('file2.txt', 'utf8');
  })
  .then(data2 => {
    console.log(data2);
    return fs.readFile('file3.txt', 'utf8');
  })
  .then(data3 => {
    console.log(data3);
  })
  .catch(err => {
    console.error("Error:", err);
  });
  */

 /*
  using async/await
  const fs = require('fs').promises;

async function readFileAsync() {
  try {
    console.log("Start reading the file...");
    const data = await fs.readFile('example.txt', 'utf8');
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
  console.log("This will print after the file is read!");
}

readFileAsync();
*/

const add=require('./math');
console.log(add(12,13));

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
