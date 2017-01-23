import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').getRace(params.race_id);
  },
  store: Ember.inject.service()
});
