// facultyRoutes.js
const express = require('express');
const { createFaculty, getFaculty, updateFaculty, deleteFaculty } = require('../controllers/facultyController');
const router = express.Router();

router.post('/', createFaculty);
router.get('/', getFaculty);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

module.exports = router;
