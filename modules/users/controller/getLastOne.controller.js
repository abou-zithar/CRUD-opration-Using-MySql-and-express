const MySql=require('../../../DB/connection')



const getLastOne=(req,res)=>{
 
    MySql.execute(`SELECT * FROM users WHERE name CONTAINS "r" AND age>20 AND age<25`,(err,results)=>{
        if(err){
            res.json({massage:'query err',err})

        }
        if(results.length){
            res.json({massage:'done',data:results})
        }else{
            res.json({massage:'no results to display'})
        }
    })
}
module.exports=getLastOne