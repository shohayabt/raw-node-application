// Dependencies
const http = require('http');
// App Object - Module Scaffolding
const app = {};
// Configuration
app.config = {
    port: 5000,
};
// Createing server
app.createServer = () => {
    const server = http.createServer(app.handleRequestResponse);
    server.listen(app.config.port, () => {
        console.log(`SERVER IS UP. PORT: ${app.config.port}`);
    });
};
// Handle Request and Response
app.handleRequestResponse = (req, res) => {
    // Sending a response
    res.end('HELLO PROGRAMMERS ');
};
// Run the server
app.createServer();
