var express = require('express');
var router = express.Router();

function getMetadata(token_id) {
  return {
    'name': name[Math.round(parseInt(token_id)) % name.length],
    'description': description[Math.round(parseInt(token_id)) % description.length],
    'image': imageURL[Math.round(parseInt(token_id)) % imageURL.length],
    'external_url': 'https://itsme.cool/'  + token_id,
    'attributes': {
        color: color[Math.round(parseInt(token_id) % color.length)],
        rarity: rarity[Math.round(parseInt(token_id) % rarity.length)]
    }
  }
}

const color = [
    'Red', 
    'Blue', 
    'Green', 
    'Orange', 
    'White', 
    'Black', 
    'Yellow'
]

const name = [
    'Dog Mask', 
    'Louis Vitton Mask', 
    'Rainbow Mask', 
    'Mickey Mouse Mask', 
    'Smiley Face Mask'
]

const type = [
    'Beanie',
    'Beanie',
    'Cap',
    'Bucket Hat',
    'Fun Hat'
]

const imageURL = [
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/mask%2Fdog.png?alt=media&token=63264a22-8290-4011-9919-abd06a0187cb',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/mask%2Flv.png?alt=media&token=08260939-513f-407f-9fe2-e30118558593',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/mask%2Frainbow.png?alt=media&token=21c881ff-cf45-4dfe-b02e-1338cca5fc84',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/mask%2Fred.png?alt=media&token=b8ae7878-9992-4ece-925c-ae2db4582eb9',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/mask%2Fsmiley.png?alt=media&token=7a8e246a-9fcc-4744-890a-34091fe40918'
]

const description = [
    'Beanie to show your support for the Black Lives Matter movement.',
    'Colorful rasta beanie',
    'Cap to show your support for the Black Lives Matter movement.',
    'Bucket hat with Chanel patterned design',
    'Rainbow Hat for employees of Hot Dog on a Stick'
]

const rarity = [
    'Common',
    'Rare',
    'Legendary',
    'Epic',
    'Divine'
]

/* GET mask listing. */
router.get('/:maskID', function(req, res) {
    res.send(getMetadata(req.params.maskID));
});

module.exports = router;
