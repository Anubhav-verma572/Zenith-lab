const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Define a custom API path (you can use this prefix in your frontend fetch)
    createProxyMiddleware({
      target: "https://script.google.com", // The URL of your Google Apps Script Web App
      changeOrigin: true, // Ensure the correct Origin header is sent
      pathRewrite: {
        "^/api": "", // Optionally, you can rewrite the path if you don't want `/api` prefix
      },
    })
  );
};
