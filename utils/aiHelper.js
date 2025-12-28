const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function askAITravel(prompt) {
  console.log("👉 Calling OpenAI with prompt:", prompt);

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  console.log("👉 Raw OpenAI response:", JSON.stringify(response, null, 2));

  return response.output_text;
}

module.exports = { askAITravel };

