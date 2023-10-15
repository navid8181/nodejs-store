const { chapterController } = require('../../http/controller/admin/course/chapter.controller');

const router =  require('express').Router();


router.put('/add',chapterController.addChapter)
router.get('/list/:chapterID',chapterController.chapterOfCourses)

module.exports = {adminApiChapterRouter : router}
