const request = require('supertest')
const server = require('../../server')

describe('auth.routes.js', () => {
    describe('Register Route', () => {
        it('returns 201 on successful create', async () => {
            const expectedStatus = 201;
            const response = await request(server)
            .post('/api/auth/register')
            .send({
                username: "Don",
                password: "password",
            })
            expect(response.status).toEqual(expectedStatus)
        })
        it('returns 400 on duplicate submission', async () => {
            const expectedStatus = 400;
            const response = await request(server)
            .post('/api/auth/register')
            .send({
                username: "Don",
                password: "password"
            })
            expect(response.status).toEqual(expectedStatus)
        })
    })
    describe('Login Route', () => {
        it('returns 4-1 on incorrect password', async () => {
            const expectedStatus = 401
            const response = await request(server)
            .post('/api/auth/login')
            .send({ username: "Don", password: "goldstandard"})
            expect(response.status).toBe(expectedStatus)
        })
        it('returns 200 on Successful Login', async () => {
            const expectedStatus = 200
            const response = await request(server)
            .post('/api/auth/login')
            .send({ username: "Don", password: "password"})
            expect(response.status).toBe(expectedStatus)
        })
    })
})