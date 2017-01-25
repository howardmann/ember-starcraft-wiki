import Ember from 'ember';
let $ = Ember.$;

export default Ember.Route.extend({
  actions: {
    createHero(hero){
      console.log(hero.race);
      this.get('store').saveHero(hero);
      this.transitionTo('heroes');
    },
    onChange(hero){
      let name = $('option:selected').val();
      if (name.length < 1) {return;}
      let race = this.get('store').getRaces().findBy('name', name);
      hero.set('race', race);
    }
  },
  model(){
    return this.get('store').newHero();
  },
  store: Ember.inject.service()
});
