// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// ================= AI TRAVEL ASSISTANT =================

async function askAI() {
  const input = document.getElementById("aiInput").value;
  const resultDiv = document.getElementById("aiResult");

  resultDiv.style.display = "block";
  resultDiv.innerText = "Thinking...";

  try {
    const res = await fetch("/ai/travel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    });

    const data = await res.json();

    resultDiv.innerText =
      data.reply || "⚠️ AI is currently unavailable.";

  } catch (error) {
    console.error(error);
    resultDiv.innerText =
      "❌ Unable to reach AI service. Please try again later.";
  }
}



