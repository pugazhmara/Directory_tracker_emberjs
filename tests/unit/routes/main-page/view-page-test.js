import { module, test } from 'qunit';
import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Route | main-page/view-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:main-page/view-page');
    assert.ok(route);
  });
});
