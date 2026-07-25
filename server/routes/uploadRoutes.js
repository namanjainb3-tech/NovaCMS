const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const { uploadImage } = require("../controllers/uploadController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, upload.single("image"), uploadImage);

module.exports = router;