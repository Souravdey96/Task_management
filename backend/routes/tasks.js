const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Ensure the path is correct

// Create a new task
router.post('/add', async (req, res) => {
    const { title, description, dueDate } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            dueDate,
            user: req.user.id // Assuming you have authentication middleware that sets req.user
        });

        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Other task routes (update, delete, get tasks, etc.)

module.exports = router;
