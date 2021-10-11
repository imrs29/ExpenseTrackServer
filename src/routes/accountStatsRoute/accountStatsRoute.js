const express = require("express");
const {
  accountStatsCtrl,
} = require("../../controllers/accountStatsCtrl/accountStatsCtrl");

const authMiddleware = require("../../middlewares/authMiddleware");

const accountStatsRoute = express.Router();

accountStatsRoute.get("/api/account-statistics", accountStatsCtrl);
module.exports = accountStatsRoute;
