const Texts = require('./texts.model')

describe('add', () => {
    it('should add a new text', async () => {
        const result = await Texts.add({
            friendsName : "Don",
            friendsNumber : 5853215896,
            yourName : "Justin Trombley",
            yourNumber : 5623622452
        })
        expect(result[0].friendsName).toEqual('Don')
    })
})