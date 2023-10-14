function StringToArray(...fields) {


    return function (req, res, next) {
     

        for (let i = 0; i < fields.length; i++) {
            console.log( req.body[fields[i]]);
            
            if (req.body[fields[i]]) {
        
        
                if ((typeof req.body[fields[i]]) == "string") {
                    
                    
                    if (req.body[fields[i]].indexOf("#") >= 0) {
    
                        req.body[fields[i]] = (req.body[fields[i]].split("#")).map(item => item.trim()).filter(item => item !=="")
    
                    } if (req.body[fields[i]].indexOf(",") >= 0) {
    
                        req.body[fields[i]] = (req.body[fields[i]].split(",")).map(item => item.trim()).filter(item => item !=="")
                       
                    }
                    else {
                        
                        req.body[fields[i]] = req.body[fields[i]] ? [req.body[fields[i]]] : []
                    }
    
    
                } else if (Array.isArray(req.body[fields[i]])) {
    
    
                    req.body[fields[i]] = req.body[fields[i]].map(item => item.trim())
    
                }
               
               // console.log(( req.body));
            } else {
                req.body[fields[i]] = []
            } 
            
        }

        next();
    }


}


module.exports = {
    StringToArray
}