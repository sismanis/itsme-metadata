var express = require('express');
var router = express.Router();

/* GET items listing. */
let contractInfo = {
    description : "Accessories for your Itsme avatar.", 
    external_link : "https://itsme.cool/", 
    image : "https://www.itsme.video/img/itsme_icon.svg", 
    name : "Itsme Accessories"
}

router.get('/', function(req, res, next) {
  res.send(contractInfo);
});

module.exports = router;
