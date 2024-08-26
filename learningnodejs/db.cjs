const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs')
const app = express();
const PORT = 5000;// Updated to use ES module syntax
const { connectMongoDb } = require("./connection.cjs")
const userRouter = require("./routes/user.cjs")
const { logReqRes } = require("./middleWares/db.cjs")


connectMongoDb("mongodb://127.0.0.1:27017/nodejsTut").then(()=> console.log("MongoDb Connected"))

// Express Middleware
app.use(express.urlencoded({ extended: false }));

// Route to Create User
app.use(logReqRes('log.txt'))

//Routes
app.use("/user", userRouter)

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
