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
    'Funny Nose Glasses', 
    'Audrey Hepburn Glasses', 
    'Hypnotizing Glasses', 
    'EyeMask', 
    'Striped Glasses', 
    'Thin Blue Reading Glasses', 
    'Thin Reading Glasses', 
    'Round Glasses'
]

const type = [
    'Funny',
    'Sunglasses',
    'Funny',
    'Funny',
    'Glasses',
    'Glasses',
    'Glasses',
    'Glasses'
]

const imageURL = [
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Ffunny-nose.png?alt=media&token=1c468a2e-33ca-43f1-b104-496e91408159',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fhepburn.png?alt=media&token=d6f03100-dc1a-4baa-8a4d-535ff04886a7',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fhypnotized.png?alt=media&token=10857905-dd16-4c8a-8728-0809e7cb9bc2',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fmask.png?alt=media&token=6983e113-ee4c-4823-b4a6-47681ce55bf8',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-striped.png?alt=media&token=c978adfc-90b8-4b4d-8278-74cfe457932b',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-thin-blue.png?alt=media&token=4cecd7c5-9dbf-42b0-a5ad-1df1ab387607',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Freading-thin.png?alt=media&token=b98f9b13-ee20-4d5d-82c2-24c869c98d99',
    'https://firebasestorage.googleapis.com/v0/b/itsmetesting.appspot.com/o/glasses%2Fround.png?alt=media&token=4c496c6b-446e-43d0-bb46-7b5d63bbee36'
]

const description = [
    'Funny nose glasses with a mustache.',
    'Sunglasses in the style of the famous Audrey Hepburn.',
    'Hyptonizing glasses for all the hypnotists out there.',
    'An eyemask for when you need to get some rest.',
    'Cool striped round glasses.',
    'Thin blue reading glasses.',
    'Regular thin reading glasses.',
    'Round glasses with a stylish look.'
]

const rarity = [
    'Common',
    'Rare',
    'Legendary',
    'Epic',
    'Divine'
]

/* GET glasses listing. */
router.get('/:glassesID', function(req, res) {
    res.send(getMetadata(req.params.glassesID));
});

module.exports = router;
