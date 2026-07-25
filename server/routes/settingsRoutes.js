const express = require("express");

const {
  getSettings,
  updateSettings,
  resetSettings,
} = require("../controllers/settingsController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

// All settings belong to the logged-in user
router.get("/", auth, getSettings);

router.put("/", auth, updateSettings);

router.put("/reset", auth, resetSettings);

module.exports = router;