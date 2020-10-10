const app = require('./index');
const {mwsupertest} = require('middleware-supertest');
const { test, describe, expect } = require('@jest/globals');
const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({
  toMatchImageSnapshot,
});


describe('should only accept GET requests', () => {
  test('rejects POST', async (done) => {
    const res = await mwsupertest(app)
      .post('/')
      .send('')
      .expect(405);
    done();
  });
  test('rejects PUT', async (done) => {
    const res = await mwsupertest(app)
      .put('/')
      .send('')
      .expect(405);
    done();
  });
  test('rejects DELETE', async (done) => {
    const res = await mwsupertest(app)
      .delete('/')
      .send('')
      .expect(405);
    done();
  });
  test('does not 405 GET', async (done) => {
    const res = await mwsupertest(app)
      .get('/')
      .send('');
    expect(res.status).not.toEqual(405);
    done();
  });
});

describe('Rejects requests that do not specify a meme template', () => {
  test('/', async (done) => {
    const res = await mwsupertest(app)
      .get('/')
      .expect(400);
    done();
  });
  test('/?t1=watermellons', async (done) => {
    const res = await mwsupertest(app)
      .get('/')
      .query({
        t1: 'watermellons',
      })
      .expect(400);
  done();
  });
  test('/testmeme', async (done) => {
    const res = await mwsupertest(app)
      .get('/testmeme')
    expect(res.status).not.toEqual(400);
    done();
  });
  test('/testmeme?t1=watermellons', async (done) => {
    const res = await mwsupertest(app)
      .get('/testmeme?t1=watermellons')
      .query({
        t1: 'watermellons',
      })
    expect(res.status).not.toEqual(400);
    done();
  });
});

test('404s a missing meme', async (done) => {
  const res = await mwsupertest(app)
    .get('/notFound?t1=watermellons')
    .query({
      t1: 'watermellons',
    })
  expect(res.status).toEqual(404);
  done();
});
describe('regression testing', () => {
  test('test-meme "cherries"', async (done) => {
    const res = await mwsupertest(app)
      .get('/test-meme?t1=cherriess')
      .query({
        t1: 'cherriess',
      });
    expect(res.body).toMatchImageSnapshot();
    done();
  });
  test('test-meme "strawberry"', async (done) => {
    const res = await mwsupertest(app)
      .get('/test-meme?t1=strawberrys')
      .query({
        t1: 'strawberrys',
      });
    expect(res.body).toMatchImageSnapshot();
    done();
  });  
});