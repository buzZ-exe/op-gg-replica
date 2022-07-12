var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  search.value = "https://euw.op.gg/summoners/euw/" + search.value;
  window.location.replace(search.value);
});