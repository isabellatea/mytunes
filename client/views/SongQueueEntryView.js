// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
//view for EACH single song model from our collection
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
