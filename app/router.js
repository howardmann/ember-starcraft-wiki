import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('races');
  this.route('race', {path: 'races/:race_id'});

  this.route('planets');
  this.route('planet', {path: 'planets/:planet_id'});

  this.route('heroes', function() {
    this.route('hero', {
      path: ':hero_id'
    });
    this.route('new');
  });
});

export default Router;
