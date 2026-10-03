let people = [{ name: "Sara" }];
draw();
function draw() {
  let html = "<table><tr><th>Name</th><th>In the shop</th></tr>";
  let count = 0;

  for (let p of people) {
    let { name, here } = p;
    html += "<tr><td>" + name + "</td><td>" + here + "</td></tr>";
    if (here === true) {
      count++;
    }
  }

  html += "</table>";
  document.getElementById("list").innerHTML = html;
  document.getElementById("count").innerHTML = "<p>People in the shop: " + count + "</p>";
}

function addPerson(here) {
  let name = document.getElementById("name").value;
  people.push({ name: name, here: here });
  document.getElementById("name").value = "";
  draw();
}

document.getElementById("hereBtn").addEventListener("click", function () {
  addPerson(true);
});

document.getElementById("outBtn").addEventListener("click", function () {
  addPerson(false);
});