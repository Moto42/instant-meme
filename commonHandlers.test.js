const commonHandlers = require('./commonHandlers');
const {mwsupertest} = require('middleware-supertest');
const { test, describe, expect } = require('@jest/globals');
const supertest = require('supertest');
const { get } = require('.');

test('e404', async (done) => {
  await mwsupertest(commonHandlers.e404)
    .get('/')
    .expect(404);
  done();
});
test('e405', async (done) => {
  await mwsupertest(commonHandlers.e405)
    .get('/')
    .expect(405);
  done();
});