document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const startButton = document.getElementById('startButton');
    const feedbackDiv = document.getElementById('feedback');
  
    let recognition;
  
    startButton.addEventListener('click', () => {
      if (!recognition) {
        recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  
        recognition.lang = 'pt-BR';
  
        recognition.onstart = () => {
          feedbackDiv.textContent = 'Ouvindo...';
        };
  
        recognition.onresult = (event) => {
          const comando = event.results[0][0].transcript;
          feedbackDiv.textContent = `Comando reconhecido: ${comando}`;
  
          // Envia o comando para o backend
          socket.emit('comando-voz', comando);
        };
  
        recognition.onend = () => {
          feedbackDiv.textContent = 'Parado de ouvir.';
        };
      }
  
      recognition.start();
    });
  
    // Recebe feedback do backend
    socket.on('feedback', (mensagem) => {
      feedbackDiv.textContent = mensagem;
    });
  });
  