const express = require('express');
const router = express.Router();
const {createSchedule} = require('../controllers/scheduleController');
const nodemailer = require('nodemailer');
const auth = require("../middlewares/auth")
// POST route to schedule a pickup
router.post('/newschedule',  createSchedule)

// Function to send email notification after scheduling
function sendEmailNotification() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.USER_EMAIL, // The email to notify after scheduling
    subject: 'Pickup Scheduled Successfully',
    text: 'Your plastic waste pickup has been successfully scheduled!',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = router;
