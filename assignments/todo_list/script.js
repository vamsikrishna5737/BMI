const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector(".todos");
let count = 0;
btn.addEventListener("click", function () {
  // console.log(input.value);
  // list.innerHTML = `<p class="${count}">${input.value}</p>`;
  const para = document.createElement("p");
  para.innerHTML = `${input.value}`;
  list.appendChild(para);
  para.setAttribute("key", `${count}`);
  count++;
});
list.addEventListener("click", function (e) {
  e.target.remove();
});