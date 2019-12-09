const mongoose = require('mongoose');
const config = require('./config.json');

function setUpConnection() {
  mongoose.connect(
    `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = mongoose.connection;

  db.on('error', error => console.log(error));
  db.once('open', () => console.log('connected'));
}

module.exports = setUpConnection;
