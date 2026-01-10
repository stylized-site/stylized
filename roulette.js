let spins = Number(localStorage.getItem("spins")) || 0;

function spin() {
  if (spins >= 10) return alert("Лимит 10 попыток в день");

  spins++;
  localStorage.setItem("spins", spins);

  let rand = Math.random() * 100;
  let sum = 0;

  for (let p of roulettePrizes) {
    sum += p.chance;
    if (rand <= sum) {
      alert("Вы выиграли: " + p.name);
      return;
    }
  }
}
