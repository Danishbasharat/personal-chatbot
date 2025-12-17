async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (!message) return;

    // Display user message
    displayMessage(message, "user");

    // Send to backend API
    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });

    const data = await res.json();
    displayMessage(data.reply, "bot");

    input.value = "";
}

function displayMessage(text, sender) {
    const chatbox = document.getElementById("chatbox");
    const msg = document.createElement("div");
    msg.className = sender;
    msg.textContent = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}
