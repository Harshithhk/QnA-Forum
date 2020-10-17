import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const tokenValidation = asyncHandler(async(req,res)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token =req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            if(!decoded){ 
                return res.json(false)
            }

            const user = await User.findById(decoded.id)
            if(!user){
                return res.json(false)
            }

            return res.json(true)

          
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    if(!token){
        res.status(401)

    }
})
export {tokenValidation}