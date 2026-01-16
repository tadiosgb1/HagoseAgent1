const express = require("express");
const router = express.Router();
const controller = require("../controllers/TeamController");

const upload = require("../middleware/uploadMiddleware");
const uploadFields = upload.fields([{ name: "photo", maxCount: 1 }]);
const authMiddleware = require("../middleware/authMiddleware");


router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/",authMiddleware, uploadFields, controller.create);
router.put("/:id", authMiddleware, uploadFields, controller.update);
router.delete("/:id",authMiddleware, controller.delete);

module.exports = router;
