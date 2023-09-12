var slider = document.getElementById("slider");
var output = document.getElementById("slider_value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  document.getElementById("card").style.width = this.value + "px";
};
