const express = require("express");
const router = express.Router();
const { askAITravel } = require("../utils/aiHelper");

router.post("/travel", async (req, res) => {
  console.log("✅ AI route hit");
  console.log("👉 Request body:", req.body);

  try {
    const { prompt } = req.body;

    if (!prompt) {
      console.log("❌ Prompt missing");
      return res.json({ reply: "Prompt missing" });
    }

    const aiReply = await askAITravel(prompt);

    console.log("✅ AI reply:", aiReply);

    return res.json({ reply: aiReply });

  } catch (err) {
  console.error("AI ROUTE ERROR:", err);

  let message = "AI service is currently unavailable.";

  if (err.status === 429) {
    message = "⚠️ AI quota exceeded. Please try again later.";
  }

  return res.status(500).json({
    reply: message
  });
  }
});


module.exports = router;
  
  