// In-memory storage for tasks
let tasks = [];
let currentId = 1;

/**
 * Get all tasks
 * @route GET /tasks
 * @returns {Array<Task>} 200 - List of tasks
 */
const getTasks = (req, res) => {
  res.json(tasks);
};

/**
 * Create a new task
 * @route POST /tasks
 * @param {string} title.body.required - Task title
 * @param {string} description.body.required - Task description
 * @returns {Task} 201 - Newly created task
 * @returns {Error} 400 - Missing title or description
 */
const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: 'Title and description are required'
    });
  }

  const newTask = {
    id: currentId++,
    title,
    description,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

module.exports = {
  getTasks,
  createTask
};