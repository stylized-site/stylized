let spinsToday = localStorage.getItem("spins") || 0;

const prizes = [
  { name: "Ничего 😔", chance: 99 },
  { name: "🎉 Годовой портал бесплатно", chance: 0.25 },
  { name: "🔥 Подбор лука до 10 000₽", chance: 0.5 },
  { name: "💎 Подбор лука на любую сумму", chance: 0.25 },
  { name: "💰 15 000₽", chance: 0 }
];

function spin() {
  if (spinsToday >= 10) {
    alert("Лимит 10 попыток в день");
    return;
  }

  spinsToday++;
  localStorage.setItem("spins", spinsToday);

  const wheel = document.getElementById("wheel");
  const resultText = document.getElementById("result");

  const prizeIndex = weightedRandom(prizes);
  const sectorSize = 360 / prizes.length;

  const randomOffset = Math.random() * sectorSize;
  const targetDeg =
    prizeIndex * sectorSize + randomOffset + 720;

  wheel.style.transform = rotate(${targetDeg}deg);

  setTimeout(() => {
    resultText.textContent = "Результат: " + prizes[prizeIndex].name;
  }, 3000);
}

function weightedRandom(items) {
  const total = items.reduce((s, i) => s + i.chance, 0);
  let r = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    if (r < items[i].chance) return i;
    r -= items[i].chance;
  }
  return 0;
}
