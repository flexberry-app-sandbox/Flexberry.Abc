import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-abc-coupon', 'Unit | Serializer | i-i-s-abc-coupon', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-abc-coupon',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
