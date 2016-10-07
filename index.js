'use strict';

module.exports.init = function(config, logger, stats) {  
  return {   		
   		onrequest:handleCORS,   		
	}
}

function handleCORS(req,res,next){
	if(req.method=="OPTIONS"){
     	res.setHeader('Access-Control-Allow-Origin','*')
     	res.setHeader('Access-Control-Allow-Methods','GET, POST')
     	res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
     	res.setHeader('Access-Control-Max-Age','3628800')     	
     	res.end('OK')
     }else{
     	res.setHeader('Access-Control-Allow-Origin','*')     	
     }     
     next()
}