import { module, test } from 'qunit';
import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Route | secondPage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:second-page');
    assert.ok(route);
  });
});
