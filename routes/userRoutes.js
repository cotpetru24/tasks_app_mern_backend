const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware.js')


router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/current', protect, getCurrentUser);

module.exports = router;