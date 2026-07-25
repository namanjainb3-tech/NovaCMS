const Content = require("../models/Content");

exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find().sort({ section: 1 });

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { section } = req.params;

    const updated = await Content.findOneAndUpdate(
      { section },
      {
        section,
        data: req.body,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.publishContent = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Website published successfully.",
      publishedAt: new Date(),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
