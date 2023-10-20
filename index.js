const Application = require("./app/server");



require('dotenv').config();



new Application("mongodb://localhost:27017/storeDB",5000);