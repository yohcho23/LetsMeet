const express = require('express');

const router = express.Router()
const controller = require('../controllers/groupsController');

router.post('/createGroup', async (req,res)=>{
    try{
        await controller.createGroup(req.body)
    } catch(err){
        console.log(err)
    }
})

router.get('/getGroups', async (req,res)=>{
    try{
        const groups = await controller.getGroups(req.query)
        res.json({groups:groups})
    } catch(err){
        console.log(err)
    }
})

router.post('/addMember', async (req,res)=>{
    try{
        await controller.addMember(req.body)
        res.json({})
    } catch(err){
        console.log(err)
    }
})

module.exports = router;