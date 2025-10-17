function generateTsumo(event) {
  event.preventDefault();

  let tsumoElement = document.querySelector("#tsumo");
  new Typewriter("#tsumo", {
    strings: ["Moyo Muti Unomera Paunoda"],
    autoStart: true,
    delay: 75,
    cursor: "|",
  });
}

let tsumoFormElement = document.querySelector("#tsumoGeneratorForm");
tsumoFormElement.onsubmit = generateTsumo;
