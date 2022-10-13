const express = require('express')
const UserModel = require('../models/UserSchema')

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const users = await UserModel.find()
        res.send(users)
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }    
})

// === CREATE a new user
router.post('/', async (req, res) => {
    try {
        // checking if user already exists
        const existingUser = await UserModel.find({email: req.body.email})
        // checking if there is an object in the array (idx 0)
        if (existingUser[0]) {
        return res.send('User already exists!')
        }

    const newUser = await UserModel.create(req.body)
        res.send(newUser)
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot POST')
    }

})

// === Find user by ID
router.get('/:id', async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch(error) {
        console.log(error);
        res.status(403).send('Cannot GET by ID')
    } 
})


// === PUT: update
router.put('/:id', async (req, res) =>{
    try{
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
    // ^ need to show resource AFTER update or else returns og
    res.send(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot update user')
    }
})

// === DELETE 
router.delete('/:id', async (req, res) =>{
    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
      res.send('user deleted')

    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot delete user')
    }
})
    

module.exports = router