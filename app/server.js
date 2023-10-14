const express = require('express');
const createErrors = require('http-errors');
const {default: mongoose} = require('mongoose');
const path = require('path');
const {allRoutes} = require('./router/router');
const morgan = require('morgan');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDock = require('swagger-jsdoc');
const multer = require('multer');


module.exports = class Application {

    #app = express();
    #DB_URI;
    #PORT;

    constructor(DB_URI, PORT) {
        this.#DB_URI = DB_URI;
        this.#PORT = PORT;

        this.configApplication();
        this.initRedis();
        this.connectToMongoDb();
        this.createServer();
        this.createRoutes();
        this.errorHandling();


    }

    configApplication() {

        this.#app.use(cors());
        this.#app.use(morgan("dev"));
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended: true}));
        this.#app.use(express.static(path.join(__dirname, "..", "public")));

        this.#app.use("/api-doc", swaggerUI.serve,
         swaggerUI.setup(swaggerJsDock({


            swaggerDefinition: {


                info: {

                    title: "My Store",
                    version: "1.0.0",
                    description: "یک فروشگاه محصولات ....",
                    contact: {
                        name: "navid rezaei",
                        email: "nr5391894@gmail.com"

                    }


                },
                openapi: "3.0.0",
                host: "localhost:5000",
                basePath: "/",
                servers: [
                    {
                        url: "http://localhost:5000"

                    }
                ],
                components: {
                    securitySchemes: {
                      BearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                        name : "accesstoken",
                        description: 'Bearer token to access these api endpoints',
                        in : "header"
                      },
                    },
                  },
                  security: [
                    {
                      BearerAuth: [{BearerAuth : []} ],
                    },
                  ],
                
            },
     
            apis: ["./app/router/**/*.js"]


        }),{explorer : true})
        
        
        
        )
    }

    createServer() {

        const http = require('http');

        http.createServer(this.#app).listen(this.#PORT, () => {

            console.log("app run on : http://localhost:" + this.#PORT);

        })

    }

    initRedis() {

        require('./utils/init_redis');

    }

    async connectToMongoDb() {


        try {

            await mongoose.connect(this.#DB_URI)

            console.log("connect to mongodb is successful");


        } catch (error) {
            console.log("Unable to connect to mongodb ");
            console.log(error.message);
        }

        mongoose.connection.on("connected", () => {

            console.log("connect to mongodb is successful");

        })

        mongoose.connection.on("disconnected", () => {

            console.log("disconnect to mongodb...");

        })

        process.on('SIGINT', async () => {

            await mongoose.connection.close();
            console.log("mongo Connection is Closed...");

            process.exit(0);

        })

    }

    createRoutes() {

        this.#app.use(allRoutes);


    }

    errorHandling() {

        this.#app.use((req, res, next) => {

            next(createErrors.NotFound("آدرس مورد نظر یافت نشد"))


        })

        this.#app.use((error, req, res, next) => {


            const serverError = createErrors.InternalServerError();

            const statusCode = error.status || serverError.status;

            const message = error.message || serverError.message;

            return res.status(statusCode).json({

                errors: {
                    statusCode,
                    message,
                    error

                }


            })


        })
    }


}
