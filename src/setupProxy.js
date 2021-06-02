const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use([
    createProxyMiddleware(process.env.REACT_APP_API_VERSION + "/**", {
      target: process.env.REACT_APP_PROXY_ADDRESS,
      secure: false
    }),
  ]);
  app.use([
    createProxyMiddleware(process.env.REACT_APP_API_FILES + "/**", {
      target: process.env.REACT_APP_PROXY_ADDRESS,
      secure: false
    }),
  ]);
  app.use([
    createProxyMiddleware(process.env.REACT_APP_API_APP_STATIC + "/**", {
      target: process.env.REACT_APP_PROXY_ADDRESS,
      secure: false
    }),
  ]);
};