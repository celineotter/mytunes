// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() { debugger
      this.model.play();
      //this.model.enqueue();
      // if (!this.model.get('currentSong')) {

      //   console.log('Played')
      // } else {

      //   console.log('Queued');
      // }
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
