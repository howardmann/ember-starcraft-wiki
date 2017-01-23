import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').getPlanet(params.planet_id);
  },
  store: Ember.inject.service()
});
