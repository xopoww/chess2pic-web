const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, "..", "front", "dist", "spa")));

const { createProxyMiddleware } = require('http-proxy-middleware');

const API_ADDR = process.env["API_ADDR"] || "host-gateway:65000"
app.use(
  '/api',
  createProxyMiddleware({
    target: `http://${API_ADDR}`,
    pathRewrite: {'^/api': ''},
    changeOrigin: true,
  })
);

const PORT = process.env["PORT"] || 9000;
app.listen(PORT, () => {
    console.log(`HTTP server listening on :${PORT}`);
})