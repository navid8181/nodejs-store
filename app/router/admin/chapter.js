const { chapterController } = require('../../http/controller/admin/course/chapter.controller');

const router =  require('express').Router();


router.post('/update/:chapterID',chapterController.updateChapterByID)
router.put('/add',chapterController.addChapter)
router.get('/list/:chapterID',chapterController.chapterOfCourses)
router.patch('/remove/:chapterID',chapterController.removeChapterByID)

module.exports = {adminApiChapterRouter : router}
