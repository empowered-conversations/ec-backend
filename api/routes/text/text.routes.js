const textRouter = require('express').Router();
const Texts = require('../../../data/models/texts.model');

const accountSid = 'ACbebf770149dd0c8e17b4e3a6a15d28f4';
const authToken = '0d856b94ca43b3987c22c1ef5d46366d';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


function getTexts (req, res) {
    Texts.findAll()
    .then(texts => res.json(texts))
    .catch(err => res.status(500).json(err));
}

textRouter.get("/:id", (req, res) => {
        Texts.findBy(req.params.id)
        .then(text => res.json(text))
        .catch(err => res.status(500).json(err))
})

function addText (req, res) {
    Texts.add(req.body)
        .then(newText => 
            client.messages
            .create({
              to: '+15859553180',
              from: '+12028408970',
              body: "Your friend needs to talk to you.",
            })
            .then((message) => res.status(201).json(message)))
        .catch(err => {console.log(err)
            res.status(500).json(err)})
}
function updateText(req, res) {
    Texts.update(req.params.id, req.body)
    .then(updatedText => res.json(updatedText[0]))
    .catch(err => res.status(500).json(err))
}
function deleteText(req, res) {
    Texts.remove(req.params.id)
        .then(text => res.json(text))
        .catch(err => res.status(500).json(err))
}

textRouter.get('/', getTexts).post('/', addText).put('/:id', updateText).delete('/:id', deleteText)

module.exports = textRouter
