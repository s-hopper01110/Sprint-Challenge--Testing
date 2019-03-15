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
    })
})

describe('POST /games', () => {
  it('should return 422 ', () => {
    return request(server)
      .post('/games')
      .then(res => {
        expect(res.status).toBe(422);
      });
  })

  it('should return 201 created ', () => {
    const testGames = {id:4, title: 'Sims' , releaseYear: 2000}
    return request(server)
      .post('/games')
      .send(testGames)
      .then(res => {
        expect(res.status).toBe(201);
      });
  })
  it('should return JSON', () => {
    return request(server).post('/games')
    .then(res => {
      expect(res.type).toEqual('application/json');
    });
    
  });

})







})