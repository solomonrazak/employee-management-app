const errorHandler = (err, req, res, next) => {
  // if status code is not available pass it as 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      break;
  }
};

module.exports = errorHandler;
