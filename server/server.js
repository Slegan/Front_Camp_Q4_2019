const express = require('express');
const { serverPort, host } = require('./config.json');
const router = require('./router.js');
const errorHandler = require('./errorHandler.js');

const server = express();

server.use(router);

server.use(errorHandler);

server.listen(serverPort, () => {
  console.log(`Server listening at ${host}:${serverPort}`);
});
