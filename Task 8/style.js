let rows = [];

function draw() {
  let html = "";
  for (let r of rows) {
    html += "<tr><td>" + r.item + "</td><td>" + r.quantity + "</td><td>" +
            r.price + "</td><td>" + r.line + "</td><td>" + r.note + "</td></tr>";
  }
  document.getElementById("rows").innerHTML = html;
}

function getTotal() {
  let total = 0;
  for (let r of rows) {
    if (!isNaN(r.line)) {
      total = total + r.line;
    }
  }
  return total;
}

function showInfo(row, priceText) {
  let total = getTotal();
  let text = "<p>Total: " + total + "</p>";
  text += "<p>Kind of total: " + typeof total + "</p>";
  text += "<p>Kind of note: " + typeof row.note + "</p>";
  text += "<p>Price text matches price number: " + (priceText == row.price) + "</p>";
  text += "<p>Same kind: " + (typeof priceText === typeof row.price) + "</p>";
  if (isNaN(row.line)) {
    text += "<p>Kind of this line: " + typeof row.line + "</p>";
  }
  document.getElementById("info").innerHTML = text;
}

document.getElementById("addBtn").addEventListener("click", function () {
  let itemText = document.getElementById("item").value;
  let qtyText = document.getElementById("qty").value;
  let priceText = document.getElementById("price").value;

  let row = {
    quantity: Number(qtyText),
    price: Number(priceText)
  };
  if (itemText !== "") {
    row.item = itemText;
  }
  row.line = row.quantity * row.price;
  row.note = priceText + qtyText;

  rows.push(row);
  draw();
  showInfo(row, priceText);

  document.getElementById("item").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
});