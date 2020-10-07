const server = require('./server');

//Load environmental variables and set defaults
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
if(!process.env.FRONTEND) process.env.FRONTEND = 'frontend';
if(!process.env.PORT) process.env.PORT = 3000;

server();