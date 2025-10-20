const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500' // The actual origin of your frontend
}));

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  // Configure transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Replace with your SMTP host
    port: 465, // Usually 465 (SSL) or 587 (TLS)
    secure: true, // true for port 465
    auth: {
      user: 'yourmail@gmail.com', // Replace with your email
      pass: 'your_password' // Replace with your email password or app password
    }
  });

  // Email options
  let mailOptions = {
    from: 'yourmail@gmail.com', // Sender address
    to: email, // Recipient email
    subject: subject,
    text: `Received message from: ${email}\n\nMessage:\n${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Handle CORS preflight requests
app.options('/send-email', cors());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});