const express = require("express");

const BusinessRouter = require("./business/business-router");

const server = express();

server.use(express.json());
server.use("/api/business", BusinessRouter);

module.exports = server;
