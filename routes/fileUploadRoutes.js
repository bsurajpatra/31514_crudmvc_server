const express = require('express');
const multer = require('multer');
const { bulkUpload } = require('../controllers/fileUploadController');
const router = express.Router();

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

router.post('/bulk-upload', upload.single('file'), bulkUpload);

module.exports = router;
