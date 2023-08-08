
const { createBlogSchema } = require("../../validators/admin/blog.schema");
const Controller = require("../controller");


class BlogController extends Controller {

    async createBlog(req,res,next){

        const upload = uploadFile.single("image")

        try {
        
            const blogDataBody = await createBlogSchema.validateAsync(req.body)

            req.body.image = req.body.filename

            return res.json({

                blogDataBody,
                ...req.body
            })
          

        } catch (error) {

            next(error)

        }


    }

    async getOneBlogById(req,res,next){


        try {
            
        } catch (error) {

            next(error)

        }


    }

    async getListOfBlogs(req,res,next){


        try {
            

            return res.status(200).json({

                statusCode : 200,
                data : []

                    
                    

                


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
            
        } catch (error) {

            next(error)

        }


    }


    async updateBlogById(req,res,next){


        try {
            
        } catch (error) {

            next(error)

        }


    }

}

module.exports = {

    AdminBlogController  : new BlogController()



}