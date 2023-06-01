import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.abc.caption'),
          title: i18n.t('forms.application.sitemap.abc.title'),
          children: [{
            link: 'i-i-s-abc-order-l',
            caption: i18n.t('forms.application.sitemap.abc.i-i-s-abc-order-l.caption'),
            title: i18n.t('forms.application.sitemap.abc.i-i-s-abc-order-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-abc-product-l',
            caption: i18n.t('forms.application.sitemap.abc.i-i-s-abc-product-l.caption'),
            title: i18n.t('forms.application.sitemap.abc.i-i-s-abc-product-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-abc-client-l',
            caption: i18n.t('forms.application.sitemap.abc.i-i-s-abc-client-l.caption'),
            title: i18n.t('forms.application.sitemap.abc.i-i-s-abc-client-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-abc-coupon-l',
            caption: i18n.t('forms.application.sitemap.abc.i-i-s-abc-coupon-l.caption'),
            title: i18n.t('forms.application.sitemap.abc.i-i-s-abc-coupon-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})