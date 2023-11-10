const client = require("prom-client");

const restResponseTimeHistogram = new client.Histogram({
  name: "rest_respone_time_duration_seconds",
  help: "REST API response time in seconds",
  labelNames: ["method", "route", "status_code"],
});

const databaseResponseTimeHistogram = new client.Histogram({
  name: "db_respone_time_duration_seconds",
  help: "Database API response time in seconds",
  labelNames: ["operation", "success"],
});

const metrics = {
  restResponseTimeHistogram,
  databaseResponseTimeHistogram,
};

module.exports = metrics;
