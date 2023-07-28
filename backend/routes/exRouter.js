const router = require("express").Router();
const EXController = require("../controllers/excontroller")

router.get("/opa",EXController.oi)

module.exports = router