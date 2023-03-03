import { module, test } from 'qunit';

import { setupTest } from 'zohosuper/tests/helpers';

module('Unit | Model | orgs', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('orgs', {});
    assert.ok(model);
  });
});
