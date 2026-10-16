import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import server from '../server';

describe('GET /', () => {
    it('should return a JSON response with a message', async () => {
    const response = await request(server).get('/')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body.message).toBe('Desde API')

        expect(response.status).not.toBe(404)
        expect(response.body.message).not.toBe('desde api')
  })
})
