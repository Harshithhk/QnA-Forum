import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const tokenValidation = asyncHandler(async(req,res)=>{
    try{
    var token = req.header("authorization");
    
    if(!token) return res.json(false);
    token = token.split(' ')[1]
    
    const verified = jwt.verify(token,process.env.JWT_SECRET)
    if(!verified) return res.json(false);
       
    const user = await User.findById(verified.id);
    if(!user) return res.json(false);
    
    return res.json(true);
    } catch(err){
        
        console.log('No User')
        res.status(500).json({error: err.message})
    }
})
export {tokenValidation}