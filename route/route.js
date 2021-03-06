const express = require("express");
const router = express.Router();

const urlController = require("../controller/url.controller");

router.post("/hashUrl", urlController.hashUrl);

module.exports = router;
