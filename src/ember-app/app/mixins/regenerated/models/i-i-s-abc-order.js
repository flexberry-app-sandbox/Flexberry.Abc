import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  status: DS.attr('string'),
  client: DS.belongsTo('i-i-s-abc-client', { inverse: null, async: false }),
  coupon: DS.belongsTo('i-i-s-abc-coupon', { inverse: null, async: false }),
  orderProduct: DS.hasMany('i-i-s-abc-order-product', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-abc-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-abc-order.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  coupon: {
    descriptionKey: 'models.i-i-s-abc-order.validations.coupon.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderProduct: {
    descriptionKey: 'models.i-i-s-abc-order.validations.orderProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderE', 'i-i-s-abc-order', {
    status: attr('Status', { index: 0 }),
    client: belongsTo('i-i-s-abc-client', 'Client', {
      password: attr('Password', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'password' }),
    coupon: belongsTo('i-i-s-abc-coupon', 'Coupon', {
      productName: attr('Product name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'productName' }),
    orderProduct: hasMany('i-i-s-abc-order-product', 'Order product', {
      amount: attr('Amount', { index: 0 }),
      product: belongsTo('i-i-s-abc-product', 'Product', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-abc-order', {
    status: attr('Status', { index: 0 }),
    client: belongsTo('i-i-s-abc-client', 'Password', {
      password: attr('Password', { index: 1 })
    }, { index: -1, hidden: true }),
    coupon: belongsTo('i-i-s-abc-coupon', 'Product name', {
      productName: attr('Product name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
