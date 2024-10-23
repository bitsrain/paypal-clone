// Catch any unhandled errors and send a structured response
exports.errorHandler = (err, req, res, next) => {
  // Set status code if it's not already set, otherwise default to 500 (Server Error)
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // Set status code in response
  res.status(statusCode);

  // Return structured error response
  res.json({
    message: err.message,           // Error message
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,  // Only show stack trace in development
    status: statusCode,
  });
};
