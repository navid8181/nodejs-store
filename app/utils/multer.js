const multer = require('multer');
const fs = require('fs');
const path = require('path');

function createRoutes() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const directory = path.join(__dirname, "..", "..", "public", "uploads", "blogs", year, month, day)

    fs.mkdirSync(directory, {recursive: true})

    return directory;

}


const Store = multer.diskStorage({


    destination: (req, file, cb) => {

        const filePath = createRoutes();

        cb(null,filePath)
    },

    destination: (req, file, cb) => {

        const ext = path.extname(file.originalname)
        const fileName = String(new Date().getTime() + ext)
        cb(null,fileName)
    }


})
