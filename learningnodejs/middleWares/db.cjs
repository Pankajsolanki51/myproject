const fs = require("fs");

function logReqRes(filename) {
  return function (req, res, next) {
    const logMessage = `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}\n`;

    fs.appendFile(filename, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
      next(); // Call next middleware/route handler after logging
    });
  };
}

module.exports = {
  logReqRes,
};
