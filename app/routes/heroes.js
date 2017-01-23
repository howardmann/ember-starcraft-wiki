import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').getHeroes();
  },
  store: Ember.inject.service()
});
