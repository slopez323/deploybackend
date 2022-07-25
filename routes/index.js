var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post-message", function (req, res, next) {
  const clientMessage = req.body.clientMessage;
  const dateTime = new Date();
  res.json(
    `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`
  );
});

module.exports = router;
