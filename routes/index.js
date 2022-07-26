var express = require("express");
var router = express.Router();

const userList = [{
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "jd@gmail.com"
}];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get-users", function (req, res, next) {
  res.json(userList)
})

router.post("/post-message", function (req, res, next) {
  const clientMessage = req.body.clientMessage;
  const dateTime = new Date();
  res.json(
    `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`
  );
});

module.exports = router;
