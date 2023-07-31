const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Simple endpoint to add two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum });
  } else {
    res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});