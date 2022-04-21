const MySql=require('../../../DB/connection')



const getcondiation=(req,res)=>{
 
    MySql.execute(`SELECT * FROM users WHERE age>20 AND age<40 `,(err,results)=>{
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
module.exports=getcondiation