const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { bulkUpload } = require('../controllers/fileUploadController');
const router = express.Router();

router.post('/bulk-upload', uploadMiddleware.single('file'), bulkUpload);

module.exports = router;
