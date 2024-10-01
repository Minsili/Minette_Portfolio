const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debugging
});

// POST route to handle form submissions
app.post("/send-email", (req, res) => {
  const { firstname, secondname, email, phoneNumber, message } = req.body;

  console.log("Received form data:", req.body); // Log form data

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${firstname} ${secondname}`,
    text: `You have a new message from ${firstname} ${secondname}.\n\nEmail: 
           ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Failed to send email" });
    } else {
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
