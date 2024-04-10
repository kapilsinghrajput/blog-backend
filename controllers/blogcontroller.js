const blogModel = require("../models/blogModel.js")

class blogController{
   
  // getAllBlogs

  static getAllBlogs = async(req, res)=>{

   try {
    const fetchAllbBlogs = await blogModel.find({})
    return res.status(200).json({fetchAllbBlogs})
   } catch (error) {
    return res.status(400).json({message:error.message})
    
   }
  }


  // addBlog

  static addBlog = async(req, res)=>{
    const {title,category,description} = req.body;
    try {

      if(title && category && description){
         
        const addBlogs = new blogModel({
          title:title,
          description:description,
          category:category,
          thumbnail:req.file.filename,
          user:req.user._id,
        })

       

        const savedBlog = await addBlogs.save();
        if(savedBlog){
    return res.status(200).json({message:"blog added succseefuly"})

        }

      }
      else{
    return res.status(400).json({message:"all fields are require"})

      }
      
    } catch (error) {
    return res.status(400).json({message:error.message})
      
    }

  }

  // singleBlogs
    
  static singleBlogs = async(req, res)=>{
    const id= req.params.id;
    try {

      if(id){
          const fetchBlogById = await blogModel.findById(id);
    return res.status(200).json({
      data:fetchBlogById,
      message:"true"
    })

      }
      else{
    return res.status(400).json({message:"invalid url"})

      }
      
    } catch (error) {
    return res.status(400).json({message:error.message})
      
    }
    
  }
}

module.exports = blogController