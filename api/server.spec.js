const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  

  
  describe('GET /games', () => {
    it('should return 200 OK ', () => {
      return request(server)
        .get('/games')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    
})
})