const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    general: {
      siteName: {
        type: String,
        default: "CMS Studio",
      },
      siteUrl: {
        type: String,
        default: "",
      },
      language: {
        type: String,
        default: "English",
      },
      timezone: {
        type: String,
        default: "Asia/Kolkata",
      },
    },

    seo: {
      metaTitle: {
        type: String,
        default: "",
      },
      metaDescription: {
        type: String,
        default: "",
      },
      keywords: {
        type: String,
        default: "",
      },
      ogImage: {
        type: String,
        default: "",
      },
      twitterCard: {
        type: String,
        default: "summary_large_image",
      },
      allowIndexing: {
        type: Boolean,
        default: true,
      },
    },

    branding: {
      companyName: {
        type: String,
        default: "",
      },
      logo: {
        type: String,
        default: "",
      },
      favicon: {
        type: String,
        default: "",
      },
      copyright: {
        type: String,
        default: "",
      },
    },

    publishing: {
      status: {
        type: String,
        default: "draft",
      },

      previewUrl: {
        type: String,
        default: "",
      },

      lastPublished: {
        type: Date,
      },

      maintenanceTitle: {
        type: String,
        default: "We're Improving Things",
      },

      maintenanceMessage: {
        type: String,
        default:
          "Our team is performing scheduled maintenance to improve your experience.",
      },

      maintenanceETA: {
        type: String,
        default: "A few minutes",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);