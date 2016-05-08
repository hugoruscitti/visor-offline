import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let video = this.$("video");

    window.onresize = () => {
      let width = video.width();
      let height = video.height();
      let ratio = 0.98;

      let newWidth = window.innerWidth * ratio;
      let newHeight = window.innerHeight * ratio;

      let marginTop = ((window.innerHeight - newHeight) / 2) + "px";

      video.css("margin-top", marginTop);

      video.css("width", `${newWidth}px`);
      video.css("height", `${newHeight}px`);
    };

    video[0].addEventListener('loadeddata', function() {
      window.onresize();
    });

  },

  willDestroyElement() {
    window.onresize = function() {
    };
  }
});
