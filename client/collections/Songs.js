// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.fetch();
  },

  fetch: function() {
    var that = this;
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      data: 'limit=10',
      contentType: 'application/json',
      success: function (data) {
        console.log('data was succesfully fetched');
        that.add(data.results);
        that.trigger('addedSongs');
      },

      error: function (data) {
        console.error('Failed to fetch data');
      }

    });


  },

  // collection -> holds bunch of songs
  // pass the songs we get from the server to our collection, so it can hold them


});
