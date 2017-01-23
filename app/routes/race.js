import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let store = this.get('store');
    return store.getRace(params.race_id);
  },
  store: Ember.inject.service()
});
