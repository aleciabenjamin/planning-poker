var express = require("express");
var router = express.Router();
var { saveSession, getSession, getSessionByUuid, savePoll } = require("../controllers/poker");

router.route("/").post(saveSession);

router.route("/:id").get(getSession);

router.route("/uuid/:uuid").get(getSessionByUuid);

router.route("/:sessionId/poll").post(savePoll);

module.exports = router;