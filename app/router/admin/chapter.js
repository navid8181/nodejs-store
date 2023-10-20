const { chapterController } = require('../../http/controller/admin/course/chapter.controller');

const router =  require('express').Router();


router.put('/add',chapterController.addChapter)
router.get('/list/:chapterID',chapterController.chapterOfCourses)
router.patch('/remove/:chapterID',chapterController.removeChapterByID)
router.patch('/update/:chapterID',chapterController.updateChapterByID)

module.exports = {adminApiChapterRouter : router}
