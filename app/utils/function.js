
function randomNumberGenerator() {
    return Math.floor((Math.random() * 9_000_0)+1_000_0);
}

function removeWrongData(obj = {}){

    Object.keys(obj).forEach(key =>{

        if ([""," ",0,null,undefined,"0",NaN].includes(obj[key]))
        delete obj[key]


    })

}



module.exports = {
    randomNumberGenerator,
    removeWrongData

}