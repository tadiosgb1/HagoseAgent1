const express = require("express");
const router = express.Router();
const controller = require("../controllers/ContactController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/",  authMiddleware, controller.create);
router.put("/:id",  authMiddleware, controller.update);
router.delete("/:id",  authMiddleware,controller.delete);

module.exports = router;
