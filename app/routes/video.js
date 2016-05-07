import Ember from 'ember';

export default Ember.Route.extend({
  videos: Ember.inject.service(),
  
  model(params) {
    return this.get("videos").getByID(params.id);
  }
});
