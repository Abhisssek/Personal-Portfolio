// routes/contact.js
const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/Controller');

router.post('/create', createContact);

module.exports = router;
