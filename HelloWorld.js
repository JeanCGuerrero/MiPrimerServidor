//Hola mundo básico
console.log("Hola mundo")


//Servidor simple de hola mundo en node.js usando HTTP
const http = require('http');

const server1 = http.createServer((req, res) => {  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola mundo');
});

const PORT1 = process.env.PORT1 || 3001;
server1.listen(PORT1, () => {
  console.log(`Servidor escuchando en el puerto ${PORT1}`);
});


//Servidor síncrono que lea y envíe un archivo
const fs = require('fs');
const path = require('path');

const server2 = http.createServer((req, res) => {  
  const filePath = path.join(__dirname, 'HolaMundoSI.txt');

  // Verifica si el archivo existe
  if (fs.existsSync(filePath)) {
    // Lee el contenido del archivo de forma síncrona
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Configura la cabecera de la respuesta HTTP
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Envía el contenido del archivo como respuesta
    res.end(fileContent);
  } else {
    // Si el archivo no existe, envía una respuesta de error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Archivo no encontrado');
  }
});

const port2 = 3002;

server2.listen(port2, () => {
  console.log(`Servidor escuchando en el puerto ${port2}`);
});


//Servidor asíncrono que lea y envíe un archivo
const server3 = http.createServer((req, res) => {  
  const filePath = path.join(__dirname, 'HolaMundoAS.txt');

  // Lee el archivo de forma asíncrona
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Si ocurre un error al leer el archivo, envía una respuesta de error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
    } else {
      // Si se lee el archivo correctamente, envía el contenido como respuesta
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

const PORT3 = process.env.PORT3 || 3003;

server3.listen(PORT3, () => {
  console.log(`Servidor escuchando en el puerto ${PORT3}`);
});
