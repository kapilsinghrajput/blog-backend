const express = require("express");
const authController = require("../controllers/authController.js")
const blogController = require("../controllers/blogcontroller.js");
const categoryController = require("../controllers/categoryController.js");
const multer = require("multer");
const cheackIsUserAuthenticated = require("../middlewares/authMiddleware.js");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/upload")
    },
    filename: function (req, file, cb) {
          cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage });


const router = express.Router();

router.post("/user/register", authController.userRegistration)
router.post("/user/login", authController.userLogin)



//protected routes


router.get("/get/allblogs", cheackIsUserAuthenticated, blogController.getAllBlogs);

router.post("/add/blog", upload.single("thumbnail"), cheackIsUserAuthenticated, blogController.addBlog);

router.get("/get/blog/:id", blogController.singleBlogs);



router.get("/get/categories", cheackIsUserAuthenticated, categoryController.getAllCategories)
router.post("/add/categories", cheackIsUserAuthenticated, categoryController.addCategory)



module.exports = router