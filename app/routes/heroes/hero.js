import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').getHero(params.hero_id);
  },
  store: Ember.inject.service()
});
