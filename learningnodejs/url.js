const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    const logs = `${Date.now()}: ${req.url} New Req. Rec.\n`;
    fs.appendFile("logs.txt", logs, (err, data) => {
        res.end("Data apeended in the logs.txt file")
    });

});

server.listen(8000, () => ("Server Listining to port 8000"))