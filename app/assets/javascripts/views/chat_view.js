Hummingbird.ChatView = Ember.View.extend({
  scrollToBottom: function() {
    var lastChat = Em.$(".chat-items li:last")[0];
    if (lastChat) {
      lastChat.scrollIntoView();
    }
  }.observes('controller.content.@each')
});
