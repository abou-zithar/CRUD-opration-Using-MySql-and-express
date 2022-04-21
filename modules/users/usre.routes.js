const router=require('express').Router();
const adduser = require('./controller/signup.controll');



router.post('/adduser',adduser)



module.exports=router