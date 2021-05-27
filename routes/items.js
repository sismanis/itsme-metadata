var express = require('express');
var router = express.Router();

var hatsRouter = require('./hats');
 
function getMetadata(item_name, description, image_url, token_id, attributes) {
  return {
    'name': item_name,
    'description': description,
    'image': image_url,
    'external_url': 'https://itsme.cool/%s' % token_id,
    'attributes': attributes
  }
}

const COLOR = ['Red', 'Blue', 'Green', 'Orange', 'White', 'Black', 'Yellow', 'Purple']

/* GET items listing. */
let item = { name: 'Cute Hat', description: "Look at this cute little hat"}
router.get('/hats', hatsRouter)


router.get('/masks', function(req, res, next) {
  res.send('masks');
});

module.exports = router;
