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
    'BLM Beanie', 
    'Rasta Beanie', 
    'BLM Cap', 
    'Chanel Bucket Hat', 
    'Hot Dog On A Stick Hat', 
    'Naruto Headband', 
    'Nike Headband', 
    'Nike Headband', 
    'NY Beanie', 
    'Party Hat', 
    'Santa Hat'
]

const type = [
    'Beanie',
    'Beanie',
    'Cap',
    'Bucket Hat',
    'Fun Hat',
    'Headband',
    'Headband',
    'Headband',
    'Beanie',
    'Fun Hat',
    'Fun Hat'
]

const imageURL = [
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fbeanie-blm.png?alt=media&token=12624dd9-9202-4225-959e-3245253735e9',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fbeanie-rasta.png?alt=media&token=a337e5a2-592b-4037-bc0e-6d4c8a9b4f7f',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fblm.png?alt=media&token=78000a6d-edb3-4723-9c90-2610fe2bcec4',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fchanel.png?alt=media&token=0f6b3816-a8ae-41b5-b1b7-21407d25fe47',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fhotdogonastick.png?alt=media&token=9e51599a-6d4a-485e-b230-318d58a3d3c1',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fnaruto.png?alt=media&token=32580f86-1420-4538-a32e-03e7cf014fcf',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fnike-headband-white.png?alt=media&token=3eaddd72-f2b1-4d67-a329-7b28baf0b0ef',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fnike-headband.png?alt=media&token=c2c91bb5-8cb4-4009-8bed-9b8277998509',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fny-beanie.png?alt=media&token=05f9ca8d-dbb0-49dc-b9c2-cd6829ac7a52',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fparty.png?alt=media&token=7630ec19-f849-41da-8b89-7ad7392c7f8b',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fsanta.png?alt=media&token=22d660e8-5018-435b-af7b-2bf8475f4956'
]

const description = [
    'Beanie to show your support for the Black Lives Matter movement.',
    'Colorful rasta beanie',
    'Cap to show your support for the Black Lives Matter movement.',
    'Bucket hat with Chanel patterned design',
    'Rainbow Hat for employees of Hot Dog on a Stick',
    'Headband from the Naruto Anime',
    'A sports headband with the Nike swoosh',
    'A sports headband with the Nike swoosh',
    'Beanie with the NY logo from the New York Yankees',
    'Silly party hat for all the party-goers out there',
    'Celebrate Festivus with the rest of us with this Santa Hat'
]

const rarity = [
    'Common',
    'Rare',
    'Legendary',
    'Epic',
    'Divine'
]

/* GET hats listing. */
router.get('/:hatID', function(req, res) {
    res.send(getMetadata(req.params.hatID));
});

module.exports = router;
