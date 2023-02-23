const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/products",
    createProxyMiddleware({
      target: "http://localhost:5006",
      changeOrigin: true,
    })
  );
};
