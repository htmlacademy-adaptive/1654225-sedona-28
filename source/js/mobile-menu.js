const openMenuLink = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav");
//const modalClose = searchModal.querySelector(".modal-close-button");

openMenuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--open");
});

/*
modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchModal.classList.add("modal-close");
  });
*/
