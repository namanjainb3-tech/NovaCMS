const express = require("express");

const router = express.Router();

const {
  getAllContent,
  updateContent,
  publishContent,
} = require("../controllers/contentController");

const auth = require("../middleware/authMiddleware");

// Public
router.get("/", getAllContent);

// Protected
router.put("/:section", auth, updateContent);
router.post("/publish", auth, publishContent);

module.exports = router;
