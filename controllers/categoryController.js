const categoryModel = require("../models/categoryModel.js");

class categoryController{
    static getAllCategories = async(req,res)=>{
        try {
            const fetchAllCategory = await categoryModel.find({});
            return res.status(200).json(fetchAllCategory)
        } catch (error) {
            console.log(error);
        }
    };

    // addCategory


    static addCategory = async(req,res)=>{
       
        const {title} = req.body;
        try {
            const isTitle = await categoryModel.findOne({title:title})
            if(!isTitle){
         
                if(title){
                    const newCategory = new categoryModel({
                      title:title
                    })
                    const savedCategory = await newCategory.save();
                  return res.status(200).json({message:"category added successfuly",savedCategory})
          
                 }
                 else{
                  return res.status(400).json({message:"all fileds are required"})
          
                 }  
            }
            else{
                return res.status(400).json({message:"allready categoty exist"})

            }
     

        } catch (error) {
            console.log(error);
        }
       
    }
}

module.exports = categoryController