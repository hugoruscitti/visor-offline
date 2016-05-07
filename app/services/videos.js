import Ember from 'ember';

var path = requireNode("path");
var fs = requireNode("fs");

export default Ember.Service.extend({

  getByID(videoID) {
    return new Ember.RSVP.Promise((resolve) => {
      this.getVideos().then((data) => {
        resolve(data.findBy("id", videoID));
      });
    });
  },

  _get_video_path() {
    let videoPath;

    if (fs.existsSync("C:/videos")) {
      videoPath = "c:/videos";
    } else {
      let videoPathInLinuxOrOSX = path.join(process.env.HOME, 'videos');

      if (fs.existsSync(videoPathInLinuxOrOSX)) {
        videoPath = videoPathInLinuxOrOSX;
      } else {
        videoPath = null;
      }
    }

    return videoPath;
  },

  getVideos() {
    return new Ember.RSVP.Promise((resolve) => {
      let videoPath = this._get_video_path();

      if (!videoPath) {
        resolve([]);
        return;
      }

      fs.readdir(videoPath, (error, data) => {

        let items_initial = data.filter((e) => {
          return (e.indexOf(".mp4") > -1);
        });

        let items = items_initial.map((file) => {
          let title = file.replace(".mp4", "");

          return {
            id: title,
            title: title,
            img: videoPath + "/thumbs/" + title + ".jpg",
            video: videoPath + "/" + file
          };
        });

        resolve(items);

      });

    });
  }
});
