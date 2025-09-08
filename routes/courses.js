const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new course
router.post('/', async (req, res) => {
    try {
        const { title, description, duration, price } = req.body;
        const course = new Course({ title, description, duration, price });
        await course.save();
        res.json({ message: 'Course added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
