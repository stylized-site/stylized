let allLooks = [];

fetch("data/looks.json")
  .then(res => res.json())
  .then(data => {
    allLooks = data;
    fillStyles();
    renderLooks(data);
  });

function fillStyles() {
  const styles = [...new Set(allLooks.map(l => l.style))];
  const select = document.getElementById("styleSelect");
  styles.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
}

function applyFilter() {
  const budget = document.getElementById("budgetSelect").value;
  const style = document.getElementById("styleSelect").value;

  const filtered = allLooks.filter(l => {
    return (budget === "all" || l.budget <= budget) &&
           (style === "all" || l.style === style);
  });

  renderLooks(filtered);
}

function renderLooks(looks) {
  const container = document.getElementById("looksContainer");
  container.innerHTML = "";

  if (looks.length === 0) {
    container.innerHTML = "<p>Нет луков</p>";
    return;
  }

  looks.forEach(l => {
    let html = `<div class="card">
      <h3>${l.gender} — ${l.style}</h3>
      <p>Бюджет: до ${l.budget}₽</p>`;

    for (let item in l.items) {
      html += <p><a href="${l.items[item]}" target="_blank">${item}</a></p>;
    }

    html += "</div>";
    container.innerHTML += html;
  });
}
