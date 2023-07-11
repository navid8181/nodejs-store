const Application = require("./app/server");

new Application("mongodb://localhost:27017/storeDB",3000);