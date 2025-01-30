const childs = document.querySelectorAll(".child");
const inputColor = document.getElementById("input-color");
let color = "black";

inputColor.addEventListener("change", () => {
  color = inputColor.value;
});

for (let i = 0; i < childs.length; i++) {
  childs[i].addEventListener("mouseenter", () => {
    childs[i].style.backgroundColor = color;
  });
}
