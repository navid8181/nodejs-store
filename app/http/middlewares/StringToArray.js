function StringToArray(field) {


    return function (req, res, next) {
        console.log(req.body);
        if (req.body[field]) {
        
        
            if ((typeof req.body[field]) == "string") {
         
                if (req.body[field].indexOf("#") >= 0) {

                    req.body[field] = (req.body[field].split("#")).map(item => item.trim()).filter(item => item !=="")

                } if (req.body[field].indexOf(",") >= 0) {

                    req.body[field] = (req.body[field].split(",")).map(item => item.trim()).filter(item => item !=="")
                   
                }
                else {
                    req.body[field] = []
                }


            } else if (Array.isArray(req.body[field])) {


                req.body[field] = req.body[field].map(item => item.trim())

            }
           
           // console.log(( req.body));
        } else {
            req.body[field] = []
        } 

        next();
    }


}


module.exports = {
    StringToArray
}