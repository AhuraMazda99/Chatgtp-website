// Handle the form submission
document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var messageInput = document.getElementById('chat-input');
  var message = messageInput.value;
  messageInput.value = '';
  
  // Send the message to the ChatGPT API and display the response
  fetch('/get_response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message })
  })
  .then(response => response.json())
  .then(data => {
    var responseMessage = data.response;
    displayMessage('ChatGPT', responseMessage);
  })
  .catch(error => console.error(error));
});

// Function to display a message in the chat window
function displayMessage(sender, message) {
  var chatWindow = document.getElementById('chat-messages');
  var messageElement = document.createElement('div');
  messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
  chatWindow.appendChild(messageElement);
}
