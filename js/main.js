// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});

// tab active
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function matchFilterActive() {
  let tabFilter = $(".tab-filter");
  let tabChild = tabFilter.querySelectorAll(".tab-item");
  tabChild.forEach((tab, index) => {
    tab.onclick = function (event) {
      event.preventDefault();
      tabFilter.querySelector(".tab-item.active").classList.remove("active");
      this.classList.add("active");
    };
  });
}

function aboutListActive() {
  let tabFilter = $(".toc-list");
  let tabChild = tabFilter.querySelectorAll(".toc-item");
  tabChild.forEach((tab, index) => {
    tab.onclick = function () {
      tabFilter.querySelector(".toc-item.active").classList.remove("active");
      this.classList.add("active");
    };
  });
}

matchFilterActive();
aboutListActive();
