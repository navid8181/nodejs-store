const { chapterController } = require('../../http/controller/admin/course/chapter.controller');

const router =  require('express').Router();


router.put('/add',chapterController.addChapter)


module.exports = {adminApiChapterRouter : router}
