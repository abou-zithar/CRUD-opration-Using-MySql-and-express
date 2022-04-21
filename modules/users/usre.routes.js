const router=require('express').Router();
const deleteuser = require('./controller/delete.contol');
const getreversed = require('./controller/getreversed.controller');
const getuserbyid = require('./controller/getuserbyid.controller');
const getallusers = require('./controller/getusers.controller');
const searchByName = require('./controller/searchByName.controller');
const signin = require('./controller/signin.controller');
const adduser = require('./controller/signup.controll');
const updatauser = require('./controller/updatauser.contol');

// Get all user reversed
router.get('/getallusers',getallusers)
router.get('/getuserbyid/:id',getuserbyid)
router.get('/searchByName',searchByName)
router.get('/getreversed',getreversed)
router.post('/adduser',adduser)
router.post('/signin',signin)
router.delete('/delete/:id',deleteuser)
router.put('/updata/:id',updatauser)



module.exports=router