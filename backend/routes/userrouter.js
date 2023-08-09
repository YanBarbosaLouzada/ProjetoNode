const router = require("express").Router();
const usercontroller = require("../controllers/Usuariocontroller")

router.get("/user",usercontroller.findByUser)
router.post("/newuser",usercontroller.createUser)
router.put("/attuser/:id",usercontroller.updateUser)
router.delete("/deluser/:id",usercontroller.deleteUser)


module.exports = router 