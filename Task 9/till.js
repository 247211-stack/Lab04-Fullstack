document.getElementById("takeBtn").addEventListener("click", function () {
  let bill = Number(document.getElementById("bill").value);

  let paidText = document.getElementById("paid").value;
  let paid = null;
  if (paidText !== "") {
    paid = Number(paidText);
  }

  let change = getChange(paid, bill);
  let text = "";

  if (bill > paid) {
    text += "<p>Still owed: " + (bill - paid) + "</p>";
  } else {
    text += "<p>Change: " + change + "</p>";
  }

  if (paid > bill) {
    text += "<p>Half of the change: " + change / 2 + "</p>";
  }

  text += "<p>Kind of paid: " + typeof paid + "</p>";

  document.getElementById("out").innerHTML = text;
});

function getChange(paid, bill) {
  return paid - bill;
}