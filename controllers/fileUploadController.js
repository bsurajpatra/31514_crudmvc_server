const Student = require('../models/Student');
const fs = require('fs');
const csv = require('csv-parser');

exports.bulkUpload = async (req, res) => {
  try {
    const file = req.file;

    // Buffer to read file
    const students = [];
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (row) => {
        // Each row is expected to have "name", "age", and "grade" fields
        const { name, age, grade } = row;
        students.push({ name, age: parseInt(age), grade });
      })
      .on('end', async () => {
        try {
          // Insert all students into the Student collection
          await Student.insertMany(students);
          res.status(200).json({ message: 'File uploaded and students added successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Error saving students data', error });
        } finally {
          // Remove the uploaded file after processing
          fs.unlinkSync(file.path);
        }
      });
  } catch (error) {
    res.status(500).json({ message: 'Error processing file upload', error });
  }
};
