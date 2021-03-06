import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  if (params[0] === undefined) {return;}
  var capitalizeWord = function(word){
    return word[0].toUpperCase() + word.substr(1);
  };
  return params[0].split(' ').map(word => capitalizeWord(word)).join(' ');
}

export default Ember.Helper.helper(capitalize);
