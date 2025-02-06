const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/tasksController');

// GET all tasks
router.get('/', getTasks);

// POST a new task
router.post('/', createTask);

module.exports = router;