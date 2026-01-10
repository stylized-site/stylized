console.log("APP.JS LOADED");

const looks = [
  {
    gender: "Мужской",
    style: "Streetwear",
    budget: 10000,
    items: {
      "Футболка": "https://example.com",
      "Штаны": "https://example.com",
      "Кроссовки": "https://example.com",
      "Куртка": "https://example.com"
    }
  },
  {
    gender: "Женский",
    style: "Y2K",
    budget: 15000,
    items: {
      "Топ": "https://example.com",
      "Юбка": "https://example.com",
      "Обувь": "https://example.com"
    }
  }
];

const styleSelect = document.getElementById("styleSelect");
const container = document.getElementById("looksContainer");

const styles = [...new Set(looks.map(l => l.style))];
styles.forEach(s => {
  const opt = document.createElement("option");
  opt.value = s;
  opt.textContent = s;
  styleSelect.appendChild(opt);
});

function applyFilter() {
  const budget = document.getElementById("budgetSelect").value;
  const style = styleSelect.value;

  const filtered = looks.filter(l =>
    (budget === "all" || l.budget <= budget) &&
    (style === "all" || l.style === style)
  );

  render(filtered);
}

function render(data) {
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = "<p>Нет луков</p>";
    return;
  }

  data.forEach(l => {
    let html = `<div class="card">
      <h3>${l.gender} — ${l.style}</h3>
      <p>Бюджет: до ${l.budget}₽</p>`;
    for (let i in l.items) {
      html += <p><a href="${l.items[i]}" target="_blank">${i}</a></p>;
    }
    html += "</div>";
    container.innerHTML += html;
  });
}

applyFilter();
