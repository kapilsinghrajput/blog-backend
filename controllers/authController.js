const authModel = require("../models/authModel.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

class authController {
    static userRegistration = async(req,res)=>{
        const {username,email,password} = req.body;
        try {
            if(username && email && password){
            
                const isUser = await authModel.findOne({email:email})
                if(!isUser){
                  // password hasing
                   const gensalt = await bcryptjs.genSalt(10);
                   const hashedPassword = await bcryptjs.hash(password,gensalt);

                   // save a user
                   const newUser =  authModel({
                    username:username,
                    email:email,
                    password:hashedPassword,

                   })
 
                   const savedUser = await newUser.save();
                   res.status(200).send({message:"registration succsessfull",savedUser})
                
                }   
                else{
            return res.status(400).json({ message:"email is already exists"})

                }

            }
            else{
            return res.status(400).json({ message:"all fields are required"})

            }
            
        } catch (error) {
            return res.status(400).json({ message:error.message})
        }
    };


//////////////////////////////////////////////////////

    static userLogin = async(req,res)=>{

        const {email,password} = req.body;

        try {
            if(email,password){
             const isEmail = await authModel.findOne({email:email});
             if(isEmail){

             if(isEmail.email === email && (await bcryptjs.compare(password,isEmail.password))){

                //token generate 
                
                const token = jwt.sign( 
                    {userID:isEmail._id},
                    "pleaseSubscribe",
                    {expiresIn:"9d"}
                    )

               return res.status(200).json({
                message:"login successfuily",
                token,
                name:isEmail.username
               })     

             }
               else{
                return res.status(400).json({ message:"wrong credintion"})

               }

             }
             else{
                return res.status(400).json({ message:"email is not register"})

             }
            }
            else{
                return res.status(400).json({ message:"all fields are required"})
         
            }
            
        } catch (error) {
            console.log(error);
        }
        

    };
}

module.exports = authController