document.addEventListener("DOMContentLoaded", function () {
  function displayTsumo(response) {
    document.getElementById("loading").style.display = "none";

    console.log("API response:", response);

    if (response.data && response.data.answer) {
      document.querySelector("#tsumo").innerHTML = ""; // clear previous content

      new Typewriter("#tsumo", {
        delay: 75,
        cursor: "|",
        loop: false,
      })
        .typeString(response.data.answer)
        .start();
    } else {
      document.querySelector("#tsumo").textContent =
        "No proverb was returned. Please try a different topic.";
    }
  }

  function generateTsumo(event) {
    event.preventDefault();
    document.getElementById("loading").style.display = "block";

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "28534ee264320foa541da835at649b33";

    let context =
      "Keep people grounded in African and in particular Shona culture using user instruction as a guide.";

    let userTopic = instructionsInput.value;
    let prompt = `User instructions are: Generate short African proverb or saying in Shona and underneath in English about: ${userTopic}`;

    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    console.log("API URL:", apiURL);

    axios.get(apiURL).then(displayTsumo);
  }

  let tsumoFormElement = document.querySelector("#tsumoGeneratorForm");
  tsumoFormElement.onsubmit = generateTsumo;
});
