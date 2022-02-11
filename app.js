const results = document.querySelector(".results-container");
const btnGet = document.querySelector(".btn-generate");
const btnClear = document.querySelector(".btn-clear");

btnGet.addEventListener("click", getCat);
btnClear.addEventListener("click", clearCat);

async function fetchCat() {
  const res = await fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`
  );
  const data = await res.json();
  return data.text;
}

async function getCat() {
  const fact = document.createElement("p");
  fact.classList.add("result");
  fact.textContent = await fetchCat();
  results.appendChild(fact);

  if (results.children.length >= 1) {
    btnClear.removeAttribute("hidden");
  }
}

function clearCat() {
  results.innerHTML = "";
}
