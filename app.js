const gender = document.getElementById("gender");
const style = document.getElementById("style");
const budget = document.getElementById("budget");
const results = document.getElementById("results");

function loadOptions() {
  budgets.forEach(b => {
    let o = document.createElement("option");
    o.value = b;
    o.textContent = до ${b}₽;
    budget.appendChild(o);
  });
  updateStyles();
}

function updateStyles() {
  style.innerHTML = "";
  styles[gender.value].forEach(s => {
    let o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    style.appendChild(o);
  });
}

gender.onchange = updateStyles;

function filterLooks() {
  results.innerHTML = "";
  looks.filter(l =>
    l.gender === gender.value &&
    l.style === style.value &&
    l.budget <= budget.value
  ).forEach(l => {
    let html = <div class="card"><h3>${l.style}</h3>;
    for (let i in l.items)
      html += <p><a href="${l.items[i]}" target="_blank">${i}</a></p>;
    html += "</div>";
    results.innerHTML += html;
  });
}

loadOptions();
