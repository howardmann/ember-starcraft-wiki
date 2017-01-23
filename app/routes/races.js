import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').getRaces();
  },
  store: Ember.inject.service()
});
