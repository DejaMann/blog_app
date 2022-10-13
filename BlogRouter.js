const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

// === GET all blogs
router.get('/', async (req, res) => {
    try{
        const blogs = await BlogModel.find()
        res.render('blog/Blogs', {blogs: blogs})
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }    
})

// === GET blog by ID
router.get('/:id', async (req, res) => {
    try{
        const blog = await BlogModel.findById(req.params.id)
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot create')
    } 
})

// === CREATE a new blog
router.post('/', async (req, res) => {
    try {
        const newBlog = await BlogModel.create(req.body)
        res.send(newBlog)
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }

})

// === PUT: update by ID
router.put('/:id', async (req, res) =>{
    try{
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
    // ^ need to show resource AFTER update or else returns og
    res.send(updatedBlog)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

// === DELETE 
router.delete('/:id', async (req, res) =>{
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
      res.send('blog deleted')

    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
    

module.exports = router