// config.js
const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://nullpad.onrender.com'
  : 'http://localhost:10000';

module.exports = { SERVER_URL };