import { module, test } from 'qunit';

import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Model | main page', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('main-page', {});
    assert.ok(model);
  });
});
