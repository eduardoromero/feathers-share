'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('shares service', function() {
  it('registered the shares service', () => {
    assert.ok(app.service('shares'));
  });
});
