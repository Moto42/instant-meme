//Load environmental variables and set defaults
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
if(!process.env.FRONTEND) process.env.FRONTEND = 'frontend';