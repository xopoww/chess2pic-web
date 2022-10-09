const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, "..", "front", "dist", "spa")));

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:65000',
    pathRewrite: {'^/api': ''},
    changeOrigin: true,
  })
);

const port = 9000;
app.listen(port, () => {
    console.log(`HTTP server listening on :${port}`);
})