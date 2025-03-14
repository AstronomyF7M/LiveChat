 // Function to send a message
 function sendMessage() {
  var input = document.getElementById('chat-input');
  var messageText = input.value;
  if (messageText.trim() !== '') {
   addMessage('sent', messageText);
   input.value = ''; // Clear the input
   // In a real application, you would send the message to the server here
  }
 }
 

 // Function to add a message to the chat
 function addMessage(type, text) {
  var chatBody = document.getElementById('chat-body');
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
 

  // Scroll to the bottom of the chat
  chatBody.scrollTop = chatBody.scrollHeight;
 }
 

 // Example of a received message (for testing)
 setTimeout(function() {
  addMessage('received', 'Welcome to the chat!');
 }, 1000);
