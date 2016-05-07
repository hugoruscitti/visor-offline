import Ember from 'ember';

export default Ember.Service.extend({

  getByID(videoID) {
    return new Ember.RSVP.Promise((resolve) => {
      this.getVideos().then((data) => {
        resolve(data.findBy("id", videoID));
      });
    });
  },

  getVideos() {
    return new Ember.RSVP.Promise((resolve) => {
      let fs = requireNode("fs");
      let path = null;

      if (fs.existsSync("C:/videos")) {
        path = "c:/videos";
      } else {
        if (fs.existsSync("/Users/hugoruscitti/Desktop/videos infantiles")) {
          path = "/Users/hugoruscitti/Desktop/videos\ infantiles";
        } else {
          path = __dirname;
        }
      }



      fs.readdir(path, (error, data) => {

        let items_initial = data.filter((e) => {
          return (e.indexOf(".mp4") > -1);
        });

        let items = items_initial.map((file) => {
          let title = file.replace(".mp4", "");

          return {
            id: title,
            title: title,
            img: path + "/thumbs/" + title + ".jpg",
            video: path + "/" + file
          };
        });


        console.log(items);


        resolve(items);

      });

    });
  }
});
