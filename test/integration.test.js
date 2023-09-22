import request from 'supertest';
import  app  from '..';

describe("integration test for mathController", () => {
    it('Debería responder con El cuadrado de 5 es 25 /', async () => {
        const response = await request(app).get('/square/5');
        expect(response.text).toBe("El cuadrado de 5 es 25");
    });

    it('Debería responder con El cubo de 5 es 125 /', async () => {
        const response = await request(app).get('/cube/5');
        expect(response.text).toBe("El cubo de 5 es 125");
    });
})
