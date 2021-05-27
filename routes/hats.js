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
    'Santa Hat',
    'Funny Nose Glasses', 
    'Audrey Hepburn Glasses', 
    'Hypnotizing Glasses', 
    'EyeMask', 
    'Striped Glasses', 
    'Thin Blue Reading Glasses', 
    'Thin Reading Glasses', 
    'Round Glasses',
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
    'Funny',
    'Headband',
    'Headband',
    'Headband',
    'Beanie',
    'Funny',
    'Funny',
    'Funny',
    'Sunglasses',
    'Funny',
    'Funny',
    'Glasses',
    'Glasses',
    'Glasses',
    'Glasses',
    'Funny',
    'Funny',
    'Sytlish',
    'Branded',
    'Funny'
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
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/hat%2Fsanta.png?alt=media&token=22d660e8-5018-435b-af7b-2bf8475f4956',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Ffunny-nose.png?alt=media&token=1c468a2e-33ca-43f1-b104-496e91408159',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fhepburn.png?alt=media&token=d6f03100-dc1a-4baa-8a4d-535ff04886a7',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fhypnotized.png?alt=media&token=10857905-dd16-4c8a-8728-0809e7cb9bc2',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fmask.png?alt=media&token=6983e113-ee4c-4823-b4a6-47681ce55bf8',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-striped.png?alt=media&token=c978adfc-90b8-4b4d-8278-74cfe457932b',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-thin-blue.png?alt=media&token=4cecd7c5-9dbf-42b0-a5ad-1df1ab387607',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-thin.png?alt=media&token=b98f9b13-ee20-4d5d-82c2-24c869c98d99',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fround.png?alt=media&token=4c496c6b-446e-43d0-bb46-7b5d63bbee36',
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
    'Rainbow Hat for employees of Hot Dog on a Stick',
    'Headband from the Naruto Anime',
    'A sports headband with the Nike swoosh',
    'A sports headband with the Nike swoosh',
    'Beanie with the NY logo from the New York Yankees',
    'Silly party hat for all the party-goers out there',
    'Celebrate Festivus with the rest of us with this Santa Hat',
    'Funny nose glasses with a mustache.',
    'Sunglasses in the style of the famous Audrey Hepburn.',
    'Hyptonizing glasses for all the hypnotists out there.',
    'An eyemask for when you need to get some rest.',
    'Cool striped round glasses.',
    'Thin blue reading glasses.',
    'Regular thin reading glasses.',
    'Round glasses with a stylish look.',
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

/* GET hats listing. */
router.get('/:itemID', function(req, res) {
    res.send(getMetadata(req.params.itemID));
});

module.exports = router;
