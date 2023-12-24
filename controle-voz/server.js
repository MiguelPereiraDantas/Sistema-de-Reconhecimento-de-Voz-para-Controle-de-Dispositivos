const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Recebe comandos de voz do frontend
  socket.on('comando-voz', (comando) => {
    console.log('Comando de voz recebido:', comando);

    // Lógica de execução do comando aqui (pode envolver acionamento de dispositivos, etc.)
    // ...

    // Emitir feedback para o frontend
    socket.emit('feedback', `Comando recebido: ${comando}`);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
