const { episodeController } = require('../../http/controller/admin/course/episode.controller');
const multerErrorHandler = require('../../http/middlewares/multerErrorHandler');
const { uploadVideo } = require('../../utils/multer');

const router = require('express').Router();



router.post('/add',uploadVideo.single("video"),multerErrorHandler,episodeController.addNewEpisode)
router.delete('/remove/:episodeID',episodeController.removeEpisode)
router.patch('/update/:episodeID',uploadVideo.single("video"),episodeController.updateEpisode)




module.exports = {AdminApiEpisodeRouter : router}