const db = require('../config/db.config.js');


const {Users} = db;

exports.validApiKey = (req, res, next) => {

  const {document} = req.query;
  const {pathname} = req._parsedUrl;

  Users.findAll({ 
    where: {
      document: document
    }
    
  }).then(response => {

    if(response.length>0 || pathname=='/api/login' ){
      next();
    }else{
      res.send({auth:"invalid"});
    }
	});
  
};