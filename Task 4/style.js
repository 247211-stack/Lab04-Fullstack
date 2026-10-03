let rows = [];

function draw() {
  let html = "";
  for (let r of rows) {
    html += "<tr><td>" + r.item + "</td><td>" + r.quantity + "</td><td>" +
            r.price + "</td><td>" + r.line + "</td><td>" + r.note + "</td></tr>";
  }
  document.getElementById("rows").innerHTML = html;
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

  document.getElementById("item").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
});