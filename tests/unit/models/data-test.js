import { module, test } from 'qunit';

import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Model | data', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('data', {});
    assert.ok(model);
  });
});
