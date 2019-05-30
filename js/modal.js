var order = document.querySelector(".special-offer__order");
var overlay = document.querySelector(".overlay");
var submit = document.querySelector(".modal-form__submit");

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--close");
  overlay.classList.add("overlay--show");
});

var closeModal = function (evt) {
  if (evt.target.offsetParent === null || evt.target.offsetParent.tagName === "BODY") {
    overlay.classList.remove("overlay--show");
    overlay.classList.add("overlay--close");
  }
};

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (evt) {
  return (evt.keyCode === 27) && closeModal(evt);
});
