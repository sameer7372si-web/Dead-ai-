const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chat = document.getElementById("chat");


function addMessage(text, type) {

  const message = document.createElement("div");

  message.className = "message " + type;

  const name = type === "user"
    ? "You"
    : "Dead AI";

  message.innerHTML = `
    <strong>${name}</strong>
    <p>${text}</p>
  `;

  chat.appendChild(message);

  chat.scrollTop = chat.scrollHeight;
}


function sendMessage() {

  const text = input.value.trim();

  if (!text) return;


  addMessage(text, "user");

  input.value = "";


  setTimeout(() => {

    addMessage(
      "I'm currently in demo mode ☠️. Real AI will be connected through the backend.",
      "ai"
    );

  }, 700);
}


sendBtn.addEventListener(
  "click",
  sendMessage
);


input.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      sendMessage();

    }

  }
);
