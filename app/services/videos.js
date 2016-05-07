import Ember from 'ember';

export default Ember.Service.extend({
  getVideos() {
    return new Ember.RSVP.Promise((resolve) => {
      resolve([
        {id: 123, title: "ejemplo", img: "pepe.png", video: "pepe.mp4"},
      ]);
    });
  }
});
