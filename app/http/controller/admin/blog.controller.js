
const path = require('path');
const createHttpError = require("http-errors");
const { createBlogSchema } = require("../../validators/admin/blog.schema");
const Controller = require("../controller");
const { BlogModel } = require('../../../models/blogs');
const { deleteFileInPublic, removeWrongData } = require('../../../utils/function');


class BlogController extends Controller {

    async createBlog(req,res,next){



        try {
            

        
   

            const blogDataBody = await createBlogSchema.validateAsync(req.body)

            req.body.image = (path.join(blogDataBody.filePath,blogDataBody.filename)).replace(/\\/g,"/")

            const {title,text,short_text,category,tags} = req.body;
            const image = req.body.image;
            const author = req.user._id

            const blog = await BlogModel.create({title,text,short_text,category,tags,image,author})
            //blog.
            return res.json({

               data : {
                status : 200,
                message : "بلاگ با موفقیت ایجاد شد"
               }
            })
          

        } catch (error) {
           // console.log(req.body.image);
            deleteFileInPublic(req.body.image)
            next(error)

        }


    }

    async getOneBlogById(req,res,next){


        try {

            const {id} = req.params

            const blog = await this.findBlog(id)

            res.status(200).json({

                data : {
                    statusCode : 200,
                    blog
                }

            })


        } catch (error) {

            next(error)

        }


    }

    async getListOfBlogs(req,res,next){


        try {
            
            const blogs = await BlogModel.aggregate([

                {$match : {}},
                {
                    $lookup : {
                        from : "users",
                        foreignField : "_id",
                        localField : "author",
                        as : "author"
                    }
                },
                {
                    $unwind : "$author"
                },
                {
                    $lookup : {
                        from : "categories",
                        foreignField : "_id",
                        localField : "category",
                        as : "category"
                    }
                },
                {
                    $unwind : "$category"
                },
                {
                    $project : {
                        "author.Role" : 0,
                        "author.otp" : 0,
                        "author.bills" : 0,
                        "author.discount" : 0,
                        "category.__v" : 0
                        
                    }
                },


            ])

            return res.status(200).json({

               
                data : {
                    statusCode : 200,
                    blogs
                }

                    
                    

                


            })

        } catch (error) {
        
            next(error)

        }


    }

    async getCommentsOfBlog(req,res,next){


        try {
            
        } catch (error) {

            next(error)

        }


    }

    async deleteBlogById(req,res,next){


        try {
            
            const {id} = req.params;

            await this.findBlog(id)

            const result = await BlogModel.deleteOne({_id : id})

            if (result.deletedCount == 0) 
            throw createHttpError.InternalServerError("فایل پاک نشد")

            res.json({

                data:{
                    statusCode : 200,
                    message : "فایل با موفقیت حذف شد"
                }
            })


        } catch (error) {

            next(error)

        }


    }


    async updateBlogById(req,res,next){


  
        try {
            

         
            const {id} = req.params;
  
            await this.findBlog(id)
            const data= req.body;
            const author = req.user._id

            if (data.filePath){
                data.image = (path.join(data.filePath,data.filename)).replace(/\\/g,"/")
            }else
            data.image =  "";

           
      
    
            removeWrongData(data,["comment","like","dislike","bookmark"])

            console.log(data);

            const updateResult = await BlogModel.updateOne({_id : id},{$set : data})

            if (updateResult.modifiedCount == 0)
                throw createHttpError.InternalServerError("مقاله آپدیت نشد")
            //blog.
            return res.json({

               data : {
                status : 200,
                message : "بلاگ با موفقیت اپدیت شد"
               }
            })
          

        } catch (error) {
           // console.log(req.body.image);
            deleteFileInPublic(req?.body?.image)
            next(error)

        }

    }

    async findBlog (id){

        const blog = await BlogModel.findOne({_id : id}).populate([{path : "category",select : {__v : 0,parent : 0}},{path : "author",select : {__v : 0,otp : 0,Role : 0,bills : 0,discount : 0}}])
    
        if (!blog)
                throw createHttpError.NotFound("مقاله با این مشخصات یافت نشد")

        return blog;

    }

}

module.exports = {

    AdminBlogController  : new BlogController()



}