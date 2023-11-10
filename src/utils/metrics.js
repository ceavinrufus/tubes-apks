const express = require("express");
const client = require("prom-client");

const app = express();

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

function startMetricsServer() {
  const port = process.env.METRICS_PORT || 9100;

  const collectDefaultMetrics = client.collectDefaultMetrics;

  collectDefaultMetrics();

  res.set("Content-Type", client.register.contentType);
  app.get("/metrics", async (req, res) => {
    return res.send(await client.register.metrics());
  });

  app.listen(port, () => {
    log.info(`Metrics server started ar port ${port}`);
  });
}

const metrics = {
  restResponseTimeHistogram,
  databaseResponseTimeHistogram,
  startMetricsServer,
};

module.exports = metrics;
