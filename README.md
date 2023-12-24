# Controle de Voz para Dispositivos

Um sistema simples de controle de dispositivos por meio de comandos de voz. Este projeto utiliza JavaScript (Node.js) para o backend e a Web Speech API para o frontend.

## Instalação

Certifique-se de ter o Node.js instalado em seu ambiente. Em seguida, execute os seguintes comandos para configurar o projeto:

```bash
mkdir controle-voz
cd controle-voz
npm init -y
npm install express socket.io
```
## Execução

Para iniciar o servidor, utilize o seguinte comando:

```bash
node server.js
```
Após iniciar o servidor, abra o navegador e acesse http://localhost:3000.

## Funcionalidades
- Controle por Voz: Clique no botão "Iniciar Controle de Voz" para começar a ouvir comandos de voz.

- Comandos: Os comandos de voz são reconhecidos e enviados para o backend, onde a lógica de controle de dispositivos pode ser implementada.

- Feedback: O servidor fornece feedback sobre os comandos recebidos e executados.
 
## Personalização

Personalize a lógica no arquivo `server.js` para atender às suas necessidades específicas de controle de dispositivos. 

## Dependências

- Express
- Socket.IO

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT