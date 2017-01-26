import Ember from 'ember';

export default Ember.Object.extend({
  score: Ember.computed('attack', 'health', function(){
    return parseInt(this.get('attack')) + parseInt(this.get('health'));
  })
});
