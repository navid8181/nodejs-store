const createHttpError = require("http-errors");
const {authSchema} = require("../../validators/user/auth.schema");
const Controller = require("../controller");

module.exports = new class HomeController extends Controller {

    async indexPage(req, res, next) {

        try { // const result = await authSchema.validateAsync(req.body);


            return res.status(200).send("index page");
        } catch (error) {
            next(createHttpError.BadRequest(error.message))
        }

    }

}
