const Student = require('../models/Student');
const fs = require('fs');
const csv = require('csv-parser');

exports.bulkUpload = async (req, res) => {
  try {
    const file = req.file;

    const students = [];
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (row) => {
        const { name, age, grade } = row;
        students.push({ name, age: parseInt(age), grade });
      })
      .on('end', async () => {
        try {
          await Student.insertMany(students);
          res.status(200).json({ message: 'File uploaded and students added successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Error saving students data', error });
        } finally {
          fs.unlinkSync(file.path);
        }
      });
  } catch (error) {
    res.status(500).json({ message: 'Error processing file upload', error });
  }
};
