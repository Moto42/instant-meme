const commonHandlers = {
  e405: function(_req, res, _next) {
    res.status(405).send('This Api only accepts GET requests.');
  },
  e404: function (_req, res, _next) {
    res.status(404).send('File Not Found');
  }
};

module.exports = commonHandlers;