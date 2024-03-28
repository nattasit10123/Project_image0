const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const imagesController = require("../controllers/images-controller");
const { image } = require("../models/db");

router.get("/show", authenticate, imagesController.getByImages);
router.post("/photos", authenticate, imagesController.createImages);
router.put("/:id", authenticate, imagesController.updateImages);
router.delete("/:id", authenticate, imagesController.deleteImages);

module.exports = router;
