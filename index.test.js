const app = require('./index');
const {mwsupertest} = require('middleware-supertest');
const { it, describe, expect } = require('@jest/globals');



describe('should only accept GET requests', () => {
  it('rejects POST', async (done) => {
    const res = await mwsupertest(app)
      .post('/')
      .send('')
      .expect(405);
    done();
  });
  it('rejects PUT', async (done) => {
    const res = await mwsupertest(app)
      .put('/')
      .send('')
      .expect(405);
    done();
  });
  it('rejects DELETE', async (done) => {
    const res = await mwsupertest(app)
      .delete('/')
      .send('')
      .expect(405);
    done();
  });
  it('does not 405 GET', async (done) => {
    const res = await mwsupertest(app)
      .get('/')
      .send('');
    expect(res.status).toEqual(200);
    done();
  });
});
