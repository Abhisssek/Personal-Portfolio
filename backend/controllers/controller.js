// controllers/contactController.js
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const { name, email, location, budget, subject, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      location,
      budget,
      subject,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
