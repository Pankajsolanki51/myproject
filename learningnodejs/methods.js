//GET - getting data from teh server
//POST - WANT TO SEND THE DATA TO SERVER AND WANT TO MUTATE SOME DATA
//PUT - PUUTING SOME THING ON TEH SERVERLIEK IMAGE, FILES ETC

const fs = require("fs")
const http = require("http")

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.method}, ${req.url} new req. Rec.\n`;
    fs.appendFile("logs.txt",log,(err,data)=>{
        res.end("Data apeended in the logs.txt file")
    })

});

myserver.listen(8000,()=>console.log("server started"))
