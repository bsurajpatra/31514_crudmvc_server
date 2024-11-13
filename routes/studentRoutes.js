// studentRoutes.js
const express = require('express');
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/', createStudent);           // POST /api/students
router.get('/', getStudents);              // GET /api/students
router.put('/:id', updateStudent);         // PUT /api/students/:id
router.delete('/:id', deleteStudent);      // DELETE /api/students/:id

module.exports = router;
