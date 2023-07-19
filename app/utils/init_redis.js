const redisDB = require('redis');

const redisClient = redisDB.createClient();






(async()=>{
   await redisClient.connect();

   
})();

 redisClient.on("connect",()=>console.log("connect to redis..."))
    
    redisClient.on("ready",()=>console.log("connect to redis is successful"))
    
    redisClient.on("error",(err)=>console.log(`redis error : ${err.message}`))
    
    redisClient.on("ens",()=>console.log("disconnect to redis..."))

module.exports = redisClient;