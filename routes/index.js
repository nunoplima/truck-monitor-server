const express = require("express");
const router = express.Router();

router.get("/", () => console.log("LIVE"));

module.exports = router;
