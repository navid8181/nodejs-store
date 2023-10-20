const multer = require('multer');
const fs = require('fs');
const path = require('path');
const createHttpError = require('http-errors');

function createRoutes(req) {

    const date = new Date();

    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();


    const directory = path.join(__dirname, "..", "..", "public", "uploads", "blogs", year, month, day)

    req.body.filePath = path.join("uploads", "blogs", year, month, day)

    fs.mkdirSync(directory, {recursive: true})

    return directory;

}


const storage = multer.diskStorage({


    destination: (req, file, cb) => {

        if (file ?. originalname) {
            const filePath = createRoutes(req);


            cb(null, filePath)
        } else 
            cb(null, "")

        

    },

    filename: (req, file, cb) => {
        if (file ?. originalname) {
            const ext = path.extname(file.originalname)
            const fileName = String(new Date().getTime() + ext)
            req.body.filename = fileName;
            cb(null, fileName)
        } else 
            cb(null, "")


        


    }


})

function fileFilter(req, file, cb) {

    const ext = path.extname(file.originalname)
    console.log(ext);
    const filterFile = [
        ".jpg",
        ".png",
        ".wep",
        ".gif",
        ".jpeg"
    ]

    if (filterFile.includes(ext)) {
        return cb(null, true)
    }
    req.body.errorUpload = "تصویر ارسال شده صحیح نمی باشد";
    return cb(null, false)

    // throw createHttpError.BadRequest("فرمت ارسال شده صحیح نمی باشد")


}
function videoFilter(req, file, cb) {

    const ext = path.extname(file.originalname)
    console.log(ext);
    const filterFile = [
        ".mp4",
        ".mpg",
        ".mov",
        ".avi",
        ".mkv"
    ]

    if (filterFile.includes(ext)) {
        return cb(null, true)
    }
    req.body.errorUpload = "ویدیو ارسال شده صحیح نمی باشد";
    return cb(null, false)

    // throw createHttpError.BadRequest("فرمت ارسال شده صحیح نمی باشد")


}
const maxSize = 1 * 1000 * 1000;
const uploadFile = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: maxSize
    }

})
const videoMaxSize = 300 * 1000 * 1000;
const uploadVideo = multer({
    storage,
    videoFilter,
    limits: {
        fileSize: videoMaxSize
    }

})


module.exports = {
    uploadFile,
    uploadVideo
}
