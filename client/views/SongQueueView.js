// SongQueueView.js - Defines a backbone view class for the song queue.
//Collection of ALL song queue entries //this one renders all of the songQueueEntryViews;
var SongQueueView = Backbone.View.extend({
  //
  tagName: 'table',

  initialize: function() {
    this.render();

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
