import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Abc',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Abc',
          title: 'Abc'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
