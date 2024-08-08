// const http = require("http");

// const myserver = http.createServer((req, res) => {

//     console.log("A new Req. Rec.");
//     console.log(req);
//     // console.log(req.headers);

//     res.end("Hello from the server");
// });

// myserver.listen(8000, () => console.log("Server started listening on port 8000"));


// SMAL PROJECT ON EVERY REQUEST WE WILL CREATE THE LOGS

const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    const logs = `${Date.now()}: ${req.url} New Req. Rec.\n`;
    fs.appendFile("logs.txt", logs, (err, data) => {
        res.end("Data apeended in the logs.txt file")
    });

});

server.listen(8000, () => ("Server Listining to port 8000"))