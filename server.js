const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// --- PERSONAL CHATBOT KNOWLEDGE BASE ---
const faqs = {
  "who are you": "I am Danish's personal AI assistant.",
  "who is danish": "Danish Basharat is a student of BSCS 7TH SEM,and is  from Pakistan.",
  "what does danish do": "Along with studies, he's doing e-commerce on Amazon.",
  "what is danish's skills": "Danish is skilled in JavaScript, React, Node.js, Express, MongoDB, Flutter, Dart, Firebase, and APIs.",
  "what is danish's experience": "Danish has strong experience building MERN projects, mobile apps, and working as a truck dispatcher.",
  "where is danish from": "Danish is from Pakistan.",
  "what is danish's work": "Danish works as a developer and also helps truckers find loads as a dispatcher.",
  "what projects danish made": "Danish is currently working on his FYP which is a object detection bot,and also he has made a compiler for lexical analysis.",
  "how to contact danish": "You can contact Danish directly through his preferred communication channels, like linkedin , facbook,instagram and Email Adress.",
  "tell me about danish": "Danish is a hardworking developer, truck dispatcher, and content creator. He loves learning, coding, and helping others.",
};

// --- Chatbot Logic ---
function getResponse(message) {
  message = message.toLowerCase();

  for (let key in faqs) {
    if (message.includes(key)) {
      return faqs[key];
    }
  }
  return "I don't have an answer for that yet, but you can ask anything about Danish—his skills, work, background, or projects.";
}

// --- API Route ---
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message;
  const reply = getResponse(userMessage);
  return res.json({ reply });
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
