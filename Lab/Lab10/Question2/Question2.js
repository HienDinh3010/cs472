// Write a Caculator app 
// Step 1: Generate package.json "npm init -y"
// Step 2: In package.json file, add {"type":"module"}
// Step 3: Install express "npm install express"
// Step 4: Install nodemon "npm install nodemon"
// Step 5: In package.json file, at script, add {"start": "nodemon Question1.js"}
// To run application: "npm start"
import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper function to get numbers from various input methods
const getNumbers = (req) => {
  const { a, b } = req.params.a && req.params.b ? req.params :
                   req.query.a && req.query.b ? req.query :
                   req.body;
  return [Number(a), Number(b)];
};

// Helper function to create route handlers
const createHandler = (operation) => {
  return (req, res) => {
    const [a, b] = getNumbers(req);
    let result;

    switch (operation) {
      case 'addition':
        result = a + b;
        break;
      case 'subtraction':
        result = a - b;
        break;
      case 'multiplication':
        result = a * b;
        break;
      case 'division':
        if (b === 0) {
          return res.status(400).json({ error: 'Cannot divide by zero' });
        }
        result = a / b;
        break;
      case 'modulus':
        if (b === 0) {
          return res.status(400).json({ error: 'Cannot perform modulus with zero' });
        }
        result = a % b;
        break;
    }

    res.json({ result });
  };
};

// Routes
const operations = ['addition', 'subtraction', 'multiplication', 'division', 'modulus'];

operations.forEach(op => {
  app.get(`/${op}/:a/:b`, createHandler(op));
  app.get(`/${op}`, createHandler(op));
  app.post(`/${op}`, createHandler(op));
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator API is running on http://localhost:${port}`);
});