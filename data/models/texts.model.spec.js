const Texts = require('./texts.model')

describe('text.model.js', () => {
    describe('add', () => {
        it('should add a new text', async () => {
            const result = await Texts.add({
                friendsName : "Don",
                friendsNumber : "5853215896",
                yourName : "Justin Trombley",
                yourNumber : "5623622452"
            })
            expect(result[0].friendsName).toBe('Don')
        })
    })
    describe('findBy', () => {
        it('should find a text for Don', async () => {
            const result = await Texts.findBy({friendsName: "Don"})
            expect(result[0].friendsName).toEqual('Don')
        })
        it("should find a text with Don's phone number" , async () => {
            const result = await Texts.findBy({friendsName: "Don"})
            expect(result[0].friendsNumber).toEqual('5853215896')
        })
        it('should find a text being sent from Justin', async () => {
            const result = await Texts.findBy({yourName: "Justin"})
            expect(result[0].yourName).toEqual('5623622452')
        })
    })
    describe('find', () => {
        it('should find 3 texts', async () => {
            const results = await Texts.find()
            expect(results.length).toEqual(3)
        })
       
    })
})
