document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const toggleBtn = document.getElementById("chatbot-toggle");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");
  const chatBox = document.getElementById("chat-box");

  // Toggle open/close chatbot
  toggleBtn.addEventListener("click", () => {
    chatbot.classList.toggle("chatbot-visible");
  });

  // Send message
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    // Display user message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = userMsg;
    chatBox.appendChild(userDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";

    // Bot response
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot-message";
      botDiv.textContent = getBotReply(userMsg);
      chatBox.appendChild(botDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }

  // Responses
  function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("service") || msg.includes("offer")) {
      return "We offer photography, videography, photo editing, and event coverage services.";
    } else if (msg.includes("pre-wedding")) {
      return "Our wedding packages include pre-wedding shoots, candid photography, and cinematic videography.";
    } else if (msg.includes("studio")) {
      return "We have a professional indoor studio with advanced lighting and backdrop setups.";
    } else if (msg.includes("price") || msg.includes("cost") || msg.includes("Pricing")) {
      return "Our packages start from starting plan ₹8,000, medium plan ₹15000, premium plan ₹30000 and can be customized based on your needs.";
    } else if (msg.includes("contact")) {
      return "You can contact us via the Contact Us page or email us at info@clickaroproductions.com.";
    } else {
      return "I can tell you about our services, Pricing, or contact details. What would you like to know?";
    }
  }
});
