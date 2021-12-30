const Redis = require("ioredis");

const redis = new Redis({
  port: 6379, // Redis port
  host: "host.docker.internal", // Redis host
  // host: "redis-service-master.redis", // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: "",
  db: 0,
  reconnectOnError(err) {
    const targetError = "READONLY";
    if (err.message.includes(targetError)) {
      // Only reconnect when the error contains "READONLY"
      return true; // or `return 1;`
    }
  },
});


module.exports = redis;