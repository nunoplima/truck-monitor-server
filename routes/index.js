const express = require("express");
const router = express.Router();

router.get("/", () => console.log("Live"));

module.exports = router;
