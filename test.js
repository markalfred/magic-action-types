const assert = require('assert');
const types = require('./index.js');

describe('action type creator', () => {
  describe('without a namespace', () => {
    it('creates types', () => {
      const { FOO, BAR, BAZ } = types();

      assert.equal(FOO, 'FOO');
      assert.equal(BAR, 'BAR');
      assert.equal(BAZ, 'BAZ');
    });
  });

  describe('with a namespace', () => {
    it('creates types with a namespace prepended', () => {
      const { FOO, BAR, BAZ } = types('app/module');

      assert.equal(FOO, 'app/module/FOO');
      assert.equal(BAR, 'app/module/BAR');
      assert.equal(BAZ, 'app/module/BAZ');
    });
  });
});
