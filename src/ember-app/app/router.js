import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-abc-client-l');
  this.route('i-i-s-abc-client-e',
  { path: 'i-i-s-abc-client-e/:id' });
  this.route('i-i-s-abc-client-e.new',
  { path: 'i-i-s-abc-client-e/new' });
  this.route('i-i-s-abc-coupon-l');
  this.route('i-i-s-abc-coupon-e',
  { path: 'i-i-s-abc-coupon-e/:id' });
  this.route('i-i-s-abc-coupon-e.new',
  { path: 'i-i-s-abc-coupon-e/new' });
  this.route('i-i-s-abc-order-l');
  this.route('i-i-s-abc-order-e',
  { path: 'i-i-s-abc-order-e/:id' });
  this.route('i-i-s-abc-order-e.new',
  { path: 'i-i-s-abc-order-e/new' });
  this.route('i-i-s-abc-product-l');
  this.route('i-i-s-abc-product-e',
  { path: 'i-i-s-abc-product-e/:id' });
  this.route('i-i-s-abc-product-e.new',
  { path: 'i-i-s-abc-product-e/new' });
});

export default Router;
