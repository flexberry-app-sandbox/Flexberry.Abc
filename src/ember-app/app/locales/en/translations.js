import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAbcClientLForm from './forms/i-i-s-abc-client-l';
import IISAbcCouponLForm from './forms/i-i-s-abc-coupon-l';
import IISAbcOrderLForm from './forms/i-i-s-abc-order-l';
import IISAbcProductLForm from './forms/i-i-s-abc-product-l';
import IISAbcClientEForm from './forms/i-i-s-abc-client-e';
import IISAbcCouponEForm from './forms/i-i-s-abc-coupon-e';
import IISAbcOrderEForm from './forms/i-i-s-abc-order-e';
import IISAbcProductEForm from './forms/i-i-s-abc-product-e';
import IISAbcClientModel from './models/i-i-s-abc-client';
import IISAbcCouponModel from './models/i-i-s-abc-coupon';
import IISAbcOrderProductModel from './models/i-i-s-abc-order-product';
import IISAbcOrderModel from './models/i-i-s-abc-order';
import IISAbcProductModel from './models/i-i-s-abc-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-abc-client': IISAbcClientModel,
    'i-i-s-abc-coupon': IISAbcCouponModel,
    'i-i-s-abc-order-product': IISAbcOrderProductModel,
    'i-i-s-abc-order': IISAbcOrderModel,
    'i-i-s-abc-product': IISAbcProductModel
  },

  'application-name': 'Abc',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Abc',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Abc',
          title: 'Abc'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        abc: {
          caption: 'Abc',
          title: 'Abc',
          'i-i-s-abc-order-l': {
            caption: 'Order',
            title: ''
          },
          'i-i-s-abc-product-l': {
            caption: 'Product',
            title: ''
          },
          'i-i-s-abc-client-l': {
            caption: 'Client',
            title: ''
          },
          'i-i-s-abc-coupon-l': {
            caption: 'Coupon',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-abc-client-l': IISAbcClientLForm,
    'i-i-s-abc-coupon-l': IISAbcCouponLForm,
    'i-i-s-abc-order-l': IISAbcOrderLForm,
    'i-i-s-abc-product-l': IISAbcProductLForm,
    'i-i-s-abc-client-e': IISAbcClientEForm,
    'i-i-s-abc-coupon-e': IISAbcCouponEForm,
    'i-i-s-abc-order-e': IISAbcOrderEForm,
    'i-i-s-abc-product-e': IISAbcProductEForm
  },

});

export default translations;
