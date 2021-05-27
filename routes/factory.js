var express = require('express');
var router = express.Router();

/* GET items listing. */
let factoryInfo = {
    name: 'One Itsme Accessory',
    description: 'When you purchase this option, you will receive a single Itsme Accessory of a random variety. ',
    image_url: "https://www.itsme.video/img/itsme_icon.svg",
    num_inside: 1
}

router.get('/', function(req, res, next) {
  res.send(factoryInfo);
});

module.exports = router;
