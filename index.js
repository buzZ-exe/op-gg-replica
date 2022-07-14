// redirect the search to actual op.gg
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = form.querySelector("input[type=search]");
  search.value = "https://euw.op.gg/summoners/euw/" + search.value;
  window.location.replace(search.value);
});


// move bg with mouse (not working)
// const element = document.querySelector("div.hover");
// const button = document.querySelector("body");

// element.addEventListener("mousemove", (e) => {
//   body.style.backgroundPositionX = -e.offsetX/100 + "px";
//   body.style.backgroundPositionY = -e.offsetY/100 + "px";
// });