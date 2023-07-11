const express = require('express');
const {default: mongoose} = require('mongoose');
const path = require('path');
const {allRoutes} = require('./router/router');

module.exports = class Application {

    #app = express();
    #DB_URI;
    #PORT;

    constructor(DB_URI, PORT) {
        this.#DB_URI = DB_URI;
        this.#PORT = PORT;

        this.configApplication();
        this.connectToMongoDb();
        this.createServer();
        this.createRoutes();
        this.errorHandling();


    }

    configApplication() {

        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended: true}));
        this.#app.use(express.static(path.join(__dirname, "..", "public")));

    }

    createServer() {

        const http = require('http');

        http.createServer(this.#app).listen(this.#PORT, () => {

            console.log("app run on : http://localhost:" + this.#PORT);

        })

    }

    async connectToMongoDb() {


        try {
            console.log("connect to mongodb...");
            await mongoose.connect(this.#DB_URI)

            console.log("connect to mongodb is successful");

        } catch (error) {
            console.log("Unable to connect to mongodb ");
            console.log(error.message);
        }


    }

    createRoutes() {

        this.#app.use(allRoutes);


    }

    errorHandling() {

        this.#app.use((req, res, next) => {

            return res.status(404).json({status: 404, message: "آدرس مورد نظر یافت نشد"})


        })

        this.#app.use((error, req, res, next) => {

            const status = error.status || 500;
            const message = error.message || "Internal Error";

            return res.status(status).json({status, message})


        })
    }


}
