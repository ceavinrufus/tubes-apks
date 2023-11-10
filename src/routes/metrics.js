const express = require("express");
const router = new express.Router();
const client = require("prom-client");

router.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  return res.send(await client.register.metrics());
});

module.exports = router;
