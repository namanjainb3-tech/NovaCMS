const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const router = express.Router();

router.post("/google", async (req, res) => {
    try {
      const { credential } = req.body;
  
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const payload = ticket.getPayload();
  
      if (!payload.email_verified) {
        return res.status(401).json({
          success: false,
          message: "Google account is not verified.",
        });
      }
  
      if (
        payload.iss !== "https://accounts.google.com" &&
        payload.iss !== "accounts.google.com"
      ) {
        return res.status(401).json({
          success: false,
          message: "Invalid Google issuer.",
        });
      }
  
      const email = payload.email;
  
      let admin = await Admin.findOne({ email });

      if (!admin) {
        admin = await Admin.create({
          email,
        });
      
        console.log(`✅ New admin created: ${email}`);
      }
  
      const token = jwt.sign(
        {
          id: admin._id,
          email: admin.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
  
      res.json({
        success: true,
        token,
        admin: {
          email: admin.email,
        },
      });
  
    } catch (err) {
  
      console.error("Google Login Error:", err.message);
  
      res.status(401).json({
        success: false,
        message: "Google Authentication Failed",
      });
    }
  });

module.exports = router;

