/* eslint-disable no-unused-vars */
export function error_Handler_Middleware(err, req, res, next) {
  console.error(err);

  res
    .status(err.statusCode || 500)
    .send({
      error: err.constructor.name,
      message: err.message,
    });
}