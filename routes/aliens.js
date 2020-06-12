const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    
           const aliens = await Alien.find()
           if(aliens.length>0)
            res.json(aliens)
           else 
            res.status(404).json({Message:'Woo Hoo No Task to do ! Add some '} )
    
})

router.get('/:id', async(req,res) => {
   
           const alien = await Alien.findById(req.params.id)
           if(alien!=null)
            res.status(200).json(alien)
            else
            res.status(404).json({Error:'Task does not exist '} )
    
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        title: req.body.title,
        description: req.body.description     
    })

    
        if(await alien.save() ){
        res.status(201).json(alien)
        }else
        res.status(404).send('Error while saving task')
    
})

router.patch('/:id',async(req,res)=> {
    
        const alien = await Alien.findById(req.params.id)
        if(alien!=null){
        alien.title = req.body.title 
        alien.description = req.body.description
        const a1 = await alien.save()
        res.json(a1)   
    }else{
        res.status(404).json({Message:'Could not find the task with this id'})
    }

})

router.delete('/:id',async(req,res)=>{
    Alien.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(404).json({Message:'Delete Unsuccessful'});
        res.send('Deleted successfully!');
    })
})

module.exports = router