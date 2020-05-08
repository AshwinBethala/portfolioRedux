const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.prepare().then(() => {
    viewRoutes(server, app);
  
    server.get('*', (req, res) => {
      app.render(req, res, '/');
    });
  
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log('[ i ] Next.js server ready on port', PORT);
    });
  }).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
  
  
  module.exports = app;