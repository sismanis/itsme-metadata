var express = require('express');
var router = express.Router();

/* GET items listing. */
let contractInfo = {
    name: "Itsme Accessories",
    description : "Accessories for your Itsme avatar.", 
    external_link : "https://itsme.cool/", 
    image : "https://www.itsme.video/img/itsme_icon.svg", 
    name : "Itsme Accessories",
    seller_fee_basis_points: 500,
    fee_recipient: "0x6F35D3CE000Db487099167F5712798F39483216C"
}

router.get('/', function(req, res, next) {
  res.send(contractInfo);
});

module.exports = router;
