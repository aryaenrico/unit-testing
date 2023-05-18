const request = require('supertest');
const app = require('../app');
 const models = require('../app/models');
// const application = require('../config/application');
let server;
let token;

beforeAll(() => {
  server = app.listen(1337);
});

describe('activity on car ', () => {
  it('success get car ', async () => {
    const response = await request(server)
      .get('/v1/cars')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('meta');
    expect(response.body).toHaveProperty('meta.pagination.page');
    expect(response.body).toHaveProperty('meta.pagination.pageCount');
    expect(response.body).toHaveProperty('meta.pagination.pageSize');
    expect(response.body).toHaveProperty('meta.pagination.count');
  });
});

afterAll(async () => {
  models.sequelize.close();
  server.close();
});
