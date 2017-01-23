import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('races', function() {
    this.route('race', {
      path: ':race_id'
    });
  });
  this.route('planets', function() {
    this.route('planet', {
      path: ':planet_id'
    });
  });
  this.route('heroes', function() {
    this.route('hero', {
      path: ':hero_id'
    });
  });
});

export default Router;
