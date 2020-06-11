const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        title: req.body.title,
        description: req.body.description
        
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.title = req.body.title 
        alien.description = req.body.description
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=>{
    Alien.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
})

module.exports = router