const express = require('express');
const { createFaculty, getFaculty, updateFaculty, deleteFaculty } = require('../controllers/facultyController');
const router = express.Router();

router.post('/', createFaculty);           // POST /api/faculty
router.get('/', getFaculty);               // GET /api/faculty
router.put('/:id', updateFaculty);         // PUT /api/faculty/:id
router.delete('/:id', deleteFaculty);      // DELETE /api/faculty/:id

module.exports = router;