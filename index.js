const WebSocket = require('ws');

const PORT = process.env.PORT || 8080; // Replace 8080 with your desired port number

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  // Handle incoming messages from connected clients
  ws.on('message', (message) => {
    console.log('Received message from client:', message);
    // Process the message from the client, and if needed, send back a response
    ws.send('Message received by server');
  });

  // Listen for the WebSocket close event
  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

console.log(`WebSocket server listening on port ${PORT}`);
