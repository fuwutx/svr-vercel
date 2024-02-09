const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This os running uptime is: " + os.uptime() + "\n");
    res.end("Hello, World!");
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;