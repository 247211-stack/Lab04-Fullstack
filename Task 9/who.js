let people = [];

function addPerson(here) {
  let name = document.getElementById("name").value;
  people.push({ name: name, here: here });
  document.getElementById("name").value = "";
}

document.getElementById("hereBtn").addEventListener("click", function () {
  addPerson(true);
});

document.getElementById("outBtn").addEventListener("click", function () {
  addPerson(false);
});