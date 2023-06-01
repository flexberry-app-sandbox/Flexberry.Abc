import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  login: DS.attr('string'),
  password: DS.attr('string')
});

export let ValidationRules = {
  login: {
    descriptionKey: 'models.i-i-s-abc-client.validations.login.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  password: {
    descriptionKey: 'models.i-i-s-abc-client.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClientE', 'i-i-s-abc-client', {
    password: attr('Password', { index: 0 }),
    login: attr('Login', { index: 1 })
  });

  modelClass.defineProjection('ClientL', 'i-i-s-abc-client', {
    password: attr('Password', { index: 0 }),
    login: attr('Login', { index: 1 })
  });
};
