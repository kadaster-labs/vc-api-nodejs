import server from "./server.js";

const env = process.env.NODE_ENV ? process.env.NODE_ENV : "production";

server.deploy(env).catch((err) => {
  console.log(err);
});

// quit on ctrl-c when running docker in terminal
process.on("SIGINT", () => {
  console.log(
    `[${new Date().toISOString()}] Got SIGINT (aka ctrl-c in docker). Graceful shutdown`
  );
  // eslint-disable-next-line no-use-before-define
  shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", () => {
  console.log(
    `[${new Date().toISOString()}] Got SIGTERM (docker container stop). Graceful shutdown`
  );
  // eslint-disable-next-line no-use-before-define
  shutdown();
});

const shutdown = () => {
  server.undeploy();
};
