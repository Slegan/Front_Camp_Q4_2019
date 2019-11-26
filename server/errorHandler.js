const errorHandler = (err, req, res, next) => {
  // res.status(err.status || 500).json(err);
  res.status(err.status || 500).send(err);
}

module.exports = errorHandler;
