// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if ( this.length === 1 ) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.ended(); //removes song from queue after ended
    });

    this.on('dequeue', function() {
      this.dequeue();
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  ended: function() { //removes first song and plays next
    this.remove(this.at(0));
    if ( this.at(0) ) {
      this.playFirst();
    }
  },

  enqueue: function(song) {
    this.push(song);
  },

  dequeue: function(song) {
    this.remove(song);
  }

});