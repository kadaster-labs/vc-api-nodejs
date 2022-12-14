const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");

const oas3Tools = require("oas3-tools");

const serverPort = 8080;

// swaggerRouter configuration
const options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);
const openApiApp = expressAppConfig.getApp();

const app = express();

// Add headers
app.use(/.*/, cors());

// eslint-disable-next-line no-underscore-dangle, no-plusplus
for (let i = 2; i < openApiApp._router.stack.length; i++) {
  // eslint-disable-next-line no-underscore-dangle
  app._router.stack.push(openApiApp._router.stack[i]);
}

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, () => {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log(
    "Swagger-ui is available on http://localhost:%d/docs",
    serverPort
  );
});
