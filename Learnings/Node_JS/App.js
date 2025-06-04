// const fs=require('fs');
// console.log("Start reading the file");

// fs.readFile('./Node.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log("File content:",data);
    
// });

// const fs = require('fs').promises;

// console.log("Start reading the file...");

// fs.readFile('Node.txt', 'utf8')
//   .then(data => {
//     // console.log("File content:", data);
//   })
//   .catch(err => {
//     console.error("Error reading file:", err);
//   });

// console.log("This will print while the file is being read!");

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

// const add=require('./math');
// console.log(add(12,13));

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/hello') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello from Node.js!');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// const fs = require('fs');
// synchronously reading a file
// try {
//   const data = fs.readFileSync('Node.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// const fs=require('fs');
// const path = require('path');
// const file=path.join('/home','pictures','nar.jpg');
// console.log(file);

// const filePath = path.join('/Users', 'syasw','OneDrive', 'Desktop', 'KT TELEMATICS', 'KTT-Intern', 'Learnings', 'Node_JS', 'Node.txt');
// console.log(filePath); 


// const fs = require('fs');
// const path = require('path');

// function saveFile(fileName, content) {
//   const folder = path.join('/Users/syasw/onedrive/documents');
  
   // Create folder if it doesn't exist
//   fs.mkdirSync(folder, { recursive: true });

//   const fullPath = path.join(folder, fileName);

//   fs.writeFile(fullPath, content, err => {
//     if (err) console.log('error in saving file');
//     else console.log('file saved to ' + fullPath);
//   });
// }

// saveFile('Hello.txt', 'Welcome to KTT');



// const filePath = path.join(__dirname, 'Node.txt');

// const readStream = fs.createReadStream(filePath, 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('end', () => {
//   console.log('Done reading file.');
// });

// readStream.on('error', (err) => {
//   console.error('Error reading file:', err.message);
// });



// fs.writeFile('Node.txt', 'Hello from KTT Telematics!', (err) => {
//   if (err) {
//     console.error('Failed to write file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// });


// const writeStream = fs.createWriteStream('log.txt');

// You can write multiple chunks
// writeStream.write('Log entry 1\n');
// writeStream.write('Log entry 2\n');
// writeStream.write('Log entry 3\n');

// writeStream.end('Final log entry\n');

// writeStream.on('finish', () => {
//   console.log('All data written to log.txt');
// });

// fs.appendFile('Node.txt', '\nNew line added!', (err) => {
//   if (err) throw err;
//   console.log('Line appended!');
// });




// const folderPath = path.join(__dirname, 'Node_JS'); // this should be a folder

// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//   } else {
//     console.log('Folder contents:', files);
//   }
// });

const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'uploads');
const filePath = path.join(folderPath, 'sampleFile.txt'); // Path to the file you want to create

// Step 1: Create the uploads folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log('Created folder:', folderPath);
}

// Step 2: Write a file inside the uploads folder
fs.writeFile(filePath, 'This is a sample file content', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created:', filePath);

    // Step 3: Read the folder contents again after creating the file
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading folder:', err);
      } else {
        console.log('Files in the folder:', files);
      }
    });
  }
});


// const readStream = fs.createReadStream('input.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('end', () => {
//   console.log('Finished reading the file.');
// });

// readStream.on('error', (err) => {
//   console.log('Error:', err);
// });

 




