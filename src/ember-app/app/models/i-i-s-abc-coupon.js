import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as CouponMixin
} from '../mixins/regenerated/models/i-i-s-abc-coupon';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CouponMixin, Validations, {
});

defineProjections(Model);

export default Model;
