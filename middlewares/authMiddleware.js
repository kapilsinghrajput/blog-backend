const jwt = require("jsonwebtoken");
const authmodel = require("../models/authModel");

const cheackIsUserAuthenticated = async(req,res,next)=>{

   

////////////////////

    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"unAuthorization user"})
    }

    try {
        // verify the jwt token
        const {userID} = jwt.verify(token,"pleaseSubscribe");
        
        // attach user information to the request object

          req.user = await authmodel.findById(userID).select("--password");
          next();
        
    } catch (error) {
        return res.status(401).json({message:" unAuthorization user"})
        
    }

}





module.exports = cheackIsUserAuthenticated