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
      this.ended();
    });

    this.on('dequeue', function(song) {
      this.dequeue();
    });

  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    this.push(song);
  },

  ended: function() {
    this.shift();
    if (this.length) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.remove(song);
    if (this.length) {
      this.playFirst();
    }
  }

});