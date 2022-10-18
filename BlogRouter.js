const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

// Add privacy to this router or routes - middleware function
router.use((req, res, next) => {
    if (req.session.loggedIn) {
    next()
    } else {
    res.redirect('/user/signin')
    }
})
// ^ confirms user is logged in, privatizes routes 
// ^ makes being loggedIn an access condition

// === GET all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {blogs: blogs, loggedInUser: req.session.username})
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }    
})

// Create Blog form
router.get('/new', (req, res) => {
    try {
    res.render('Blogs/CreateBlog',)
} catch (error) {
    console.log(error);
    res.status(403).send('Not found')
    }
})


// === POST: CREATE a new blog
router.post('/blog/new', async (req, res) => {
    try {
        // set author to loggedIn user
        req.body.author = req.session.username
        const newBlog = await BlogModel.create(req.body)
        res.redirect('/blog')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    } 
});

// === GET blog by ID
router.get('/:id', async (req, res) => {
    try{
        const blog = await BlogModel.findById(req.params.id)
        res.render('Blogs/ShowBlog', {blog: blog})
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot get')
    } 
})

// Render the Edit form
router.get('/:id/edit', async (req, res) => {
    try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('/Blogs/EditBlog', {blog: blog})
}   catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
}

})


// === PUT: update by ID
router.put('/:id', async (req, res) =>{
    try {
        if (req.body.sponsored === 'on') {
            req.body.sponsored = true;
        } else {
            req.body.sponsored = false
        }
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
    // ^ need to show resource AFTER update or else returns og
    res.redirect('/blog')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

// === DELETE 
router.delete('/:id', async (req, res) =>{
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
      res.redirect('/blog');
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot delete')
    }
})

    

module.exports = router