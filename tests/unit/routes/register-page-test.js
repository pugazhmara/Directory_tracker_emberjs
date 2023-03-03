import { module, test } from 'qunit';
import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Route | register-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:register-page');
    assert.ok(route);
  });
});
