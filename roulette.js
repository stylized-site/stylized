let spinsToday = Number(localStorage.getItem("spins")) || 0;

const prizes = [
  { name: "Ничего", chance: 99 },
  { name: "Годовой портал бесплатно", chance: 0.25 },
  { name: "Подбор лука до 10 000 ₽", chance: 0.5 },
  { name: "Подбор лука на любую сумму", chance: 0.25 },
  { name: "15 000 ₽", chance: 0 }
];

function spin() {
  if (spinsToday >= 10) {
    alert("Лимит — 10 попыток в день");
    return;
  }

  spinsToday++;
  localStorage.setItem("spins", spinsToday);

  const wheel = document.getElementById("wheel");
  const resultText = document.getElementById("result");

  const prizeIndex = weightedRandom(prizes);
  const sectorSize = 360 / prizes.length;
  const randomOffset = Math.random() * sectorSize;
  const rotation = prizeIndex * sectorSize + randomOffset + 1080;

  wheel.style.transform = rotate(${rotation}deg);

  setTimeout(() => {
    resultText.textContent = "🎁 " + prizes[prizeIndex].name;
  }, 4000);
}

function weightedRandom(items) {
  let total = items.reduce((sum, item) => sum + item.chance, 0);
  let rand = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    if (rand < items[i].chance) return i;
    rand -= items[i].chance;
  }
  return 0;
}
