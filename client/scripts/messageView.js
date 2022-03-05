// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
<<<<<<< HEAD
        <div class="<%= userName %>"></div>
        <div><%= messageText %></div>
      </div>
      -->
    `)

};

// MessageView.render(App.username)
=======
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>`)

};

// MessageView.render({text: Message._data[14].text, username: Message._data[14].username});
>>>>>>> d9d8d5856b0c038bc70158c7bc43e3da1f639b70
