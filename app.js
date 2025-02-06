const express = require('express');
const app = express();

// Routes
const tasksRouter = require('./routes/tasks');

// Middleware
app.use(express.json());

// Mount tasks router
app.use('/tasks', tasksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});