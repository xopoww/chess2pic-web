const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, "..", "front", "dist", "spa")));

const { createProxyMiddleware } = require('http-proxy-middleware');

const API_PORT = process.env["API_PORT"];
app.use(
  '/api',
  createProxyMiddleware({
    target: `http://my-awesome-domain.io:${API_PORT}`,  // TODO: replace with actual domain name
    pathRewrite: {'^/api': ''},
    changeOrigin: true,
  })
);

const port = 9000;
app.listen(port, () => {
    console.log(`HTTP server listening on :${port}`);
})