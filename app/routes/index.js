import Ember from 'ember';

export default Ember.Route.extend({
  videos: Ember.inject.service(),

  model() {
    return this.get("videos").getVideos();
  }
});
