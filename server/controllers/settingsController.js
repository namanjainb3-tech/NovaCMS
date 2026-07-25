const Settings = require("../models/Settings");

const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({
    });

    if (!settings) {
      settings = await Settings.create({
      });
    }

    res.status(200).json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch settings.",
    });
  }
};

const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({
    });

    if (!settings) {
      settings = await Settings.create({
      });
    }

    settings.set(req.body);

    if (
      req.body.publishing &&
      req.body.publishing.status === "published"
    ) {
      settings.publishing.lastPublished = new Date();
    }

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      settings,
    });
  } catch (error) {
    console.error("Error updating settings:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update settings.",
    });
  }
};

const resetSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({
    });

    if (!settings) {
      settings = await Settings.create({
      });
    }

    settings.general = {};
    settings.seo = {};
    settings.branding = {};
    settings.publishing = {};

    await settings.save();

    settings = await Settings.findById(settings._id);

    res.status(200).json({
      success: true,
      message: "Settings reset successfully.",
      settings,
    });
  } catch (error) {
    console.error("Error resetting settings:", error);

    res.status(500).json({
      success: false,
      message: "Failed to reset settings.",
    });
  }
};

module.exports = {
  getSettings,
  updateSettings,
  resetSettings,
};
