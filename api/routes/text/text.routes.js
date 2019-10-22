const textRouter = require('express').Router();
const Texts = require('../../../data/models/texts.model');

function getTexts (req, res) {
    Texts.findAll()
    .then(texts => res.json(texts))
    .catch(err => res.status(500).json('getTexts', err));
}

textRouter.get("/:id", (req, res) => {
        Texts.findBy(req.params.id)
        .then(text => res.json(text))
        .catch(err => res.status('I am a string').json('getSpecificTexts',err))
})
// function getSpecificText (req, res) {
    



//     Texts.findBy(req.params.id)
//         .then(text => res.json(text))
//         .catch(err => res.status('I am a string').json('getSpecificTexts',err))

// }

function addText (req, res) {
    Texts.add(req.body)
        .then(newText => res.status(201).json(newText[0]))
        .catch(err => res.status(500).json('addText',err))
}
function updateText(req, res) {
    Texts.update(req.params.id, req.body)
    .then(updated)
    .catch(err => res.status(500).json('updateText', err))
}
function deleteText(req, res) {
    Texts.remove(req.params.id)
        .then(text => res.json(text))
        .catch(err => res.status(500).json('deleteText',err))
}

textRouter.get('/', getTexts).post('/', addText).put('/:id', updateText).delete('/:id', deleteText)

module.exports = textRouter
