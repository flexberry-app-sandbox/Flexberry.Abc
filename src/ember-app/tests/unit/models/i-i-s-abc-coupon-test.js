import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-abc-coupon', 'Unit | Model | i-i-s-abc-coupon', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-abc-client',
    'model:i-i-s-abc-coupon',
    'model:i-i-s-abc-order-product',
    'model:i-i-s-abc-order',
    'model:i-i-s-abc-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
