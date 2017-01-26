import Ember from 'ember';
let $ = Ember.$;

export default Ember.Route.extend({
  actions: {
    updateHero(hero){
      this.transitionTo('heroes');
    },
    onChange(hero){
      let name = $('option:selected').val();
      if (name.length < 1) {return;}
      let race = this.get('store').getRaces().findBy('name', name);
      hero.set('race', race);
    },
    destroyHero(hero){
      if (confirm('Are you sure')) {
        console.log('delete');
        this.get('store').deleteHero(hero);
        this.transitionTo('heroes');
      } else {
        console.log('cancel');
        return;
      };
    }
  },
  model(){
    var model = {
      hero: this.modelFor('heroes.hero'),
      races: this.get('store').getRaces()
    }
    return model;
  },
  store: Ember.inject.service()
});
