import { module, test } from 'qunit';
import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Controller | view-page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:view-page');
    assert.ok(controller);
  });
});
