import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  var str = params[0];
  return str[0].toUpperCase() + str.slice(1);
}

export default Ember.Helper.helper(capitalize);
