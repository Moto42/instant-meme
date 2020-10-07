/**
 * Server stuff. whatevs. I'm tired. 
 * FIXME
 */

function startServer() {
  const express = require('express');
  const app = express();
  
  if(process.env.FRONTEND != 'OFF'){
    app.use(express.static(process.env.FRONTEND));
  }  
  return app.listen(process.env.PORT, ()=> console.log(`Server is listening on port ${process.env.PORT}`));
}

 module.exports = startServer;