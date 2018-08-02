module.exports = (req, res, next) => {
  let message = '';
  let formValidity = true;
  const requestData = req.body;

  console.log(req);

  if (!requestData.recoveryKey || typeof requestData !== 'string') {
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
