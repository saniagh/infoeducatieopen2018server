module.exports = (req, res, next) => {
  let message = '';
  let formValidity = true;
  const requestData = req.query;

  if (!requestData.recoveryKey || typeof requestData.recoveryKey !== 'string') {
    formValidity = false;
    message = 'Key not valid.';
  }

  if (!formValidity)
    req.body = {
        ...req.body,
      message: message,
      success: formValidity,
    };
  return next();
};
