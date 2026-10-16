import request from 'supertest'
import server from '../../server'

describe('GET /api/products', () => {
    it('should return a JSON response with a message', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'PlayStation 5 Pro Digital',
            price: 900.00,
            stock: 300
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(404)
        expect(response.status).not.toBe(200)
        expect(response.body).toHaveProperty('error')
    })
})
