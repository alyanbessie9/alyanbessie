var flower = document.getElementById("flower");

for (var i = 0; i < 12; i++) {
  var petal = document.createElement("div");
  petal.className = "petal";
  petal.style.top = "160px";
  petal.style.left = "160px";
  flower.appendChild(petal);
  petal.style.transform = "rotate(" + (30 * i) + "deg)";
}
