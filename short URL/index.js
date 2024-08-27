const express = require('express')
const app = express();
const urlRoute = require("./routes/url")
const { connectToDb } = require("./connect")

const PORT = 8001;
app.use('/url', urlRoute);
connectToDb('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDB Connected"))

app.listen(PORT, () => console.log(`Server started at : ${PORT}`))