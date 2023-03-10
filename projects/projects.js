const project1 = "https://github.com/RayChen29/CS300project/";
const project2 = "https://github.com/RayChen29/bootstrapDemo";
const project3 = "https://github.com/RayChen29/TrafficGraphProjectcs";

const violet = "#aa66dd";
const gray = "#a9b3b3";
const blue = "#7c90c9";
const white = "#ffffff";
const black = "#000000";

let link1 = document.getElementsByClassName("project1")[0];
link1.addEventListener("mouseover", (event) => {
  link1.style.backgroundColor = violet;
});
link1.addEventListener("mouseout", (event) => {
  link1.style.backgroundColor = white;
});
link1.addEventListener("mousedown", (event) => {
  link1.style.backgroundColor = blue;
});
link1.addEventListener("click", (event) => {
  window.open(project1, "_blank");
});
link1.addEventListener("mouseup", (event) => {
  link1.style.backgroundColor = violet;
});

let link2 = document.getElementsByClassName("project2")[0];
link2.addEventListener("mouseover", (event) => {
  link2.style.backgroundColor = violet;
});
link2.addEventListener("mouseout", (event) => {
  link2.style.backgroundColor = white;
});
link2.addEventListener("mousedown", (event) => {
  link2.style.backgroundColor = blue;
});
link2.addEventListener("click", (event) => {
  window.open(project2, "_blank");
});
link1.addEventListener("mouseup", (event) => {
  link2.style.backgroundColor = violet;
});

let link3 = document.getElementsByClassName("project3")[0];
link3.addEventListener("mouseover", (event) => {
  link3.style.backgroundColor = violet;
});
link3.addEventListener("mouseout", (event) => {
  link3.style.backgroundColor = white;
});
link3.addEventListener("mousedown", (event) => {
  link3.style.backgroundColor = blue;
});
link3.addEventListener("click", (event) => {
  window.open(project3, "_blank");
});
link3.addEventListener("mouseup", (event) => {
  link3.style.backgroundColor = violet;
});
