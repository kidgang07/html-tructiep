// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/third_party/bootstrap.bundle.min.js";

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
  if (tabFilter) {
    let tabChild = tabFilter.querySelectorAll(".tab-item");
    tabChild.forEach((tab, index) => {
      tab.onclick = function (event) {
        event.preventDefault();
        tabFilter.querySelector(".tab-item.active").classList.remove("active");
        this.classList.add("active");
      };
    });
  }
}

function aboutListActive() {
  let tabFilter = $(".toc-list");
  if (tabFilter) {
    let tabChild = tabFilter.querySelectorAll(".toc-item");
    tabChild.forEach((tab, index) => {
      tab.onclick = function () {
        tabFilter.querySelector(".toc-item.active").classList.remove("active");
        this.classList.add("active");
      };
    });
  }
}

function liveBXH() {
  let subFilterTabs = $$(".subFilter__group a");
  if (subFilterTabs) {
    subFilterTabs.forEach((tab) => {
      tab.onclick = function (e) {
        e.preventDefault();
        $(".subFilter__group a.active").classList.remove("active");
        this.classList.add("active");
      };
    });
  }

  let tournamentTableSimplified = $(".tournamentTableSimplified");
  if (tournamentTableSimplified) {
    tournamentTableSimplified.onclick = function () {
      this.classList.toggle("tournamentTableMobileResolver__icon--selected");
      let tournamentTableTabsAndContent = $(
        ".tournament-table-tabs-and-content"
      );

      if (tournamentTableTabsAndContent) {
        let tableCellValue = $$(".table__cell--value");
        let uiTableHeaderValue = $$(".ui-table__header--value");
        let uiTableHeaderTotal = $$(".ui-table__header--totals");
        let tableCellTotal = $$(".table__cell--total");
        let tableCellScore = $$(".table__cell--score");
        let tableCellPoints = $$(".table__cell--points");
        let tableHeaderCellForm = $$(".table__headerCell--form");
        let tableCellForm = $$(".table__cell--form");

        if (
          tournamentTableTabsAndContent.classList.contains(
            "tournamentTableMobileResolver--show"
          )
        ) {
          if (tableCellValue) {
            tableCellValue.forEach((cell) => {
              cell.classList.add("d-none");
            });
          }

          if (uiTableHeaderValue) {
            uiTableHeaderValue.forEach((header) => {
              header.classList.add("d-none");
            });
          }

          if (uiTableHeaderTotal) {
            uiTableHeaderTotal.forEach((header) => {
              header.classList.toggle("d-none");
            });
          }

          if (tableCellTotal) {
            tableCellTotal.forEach((cell) => {
              cell.classList.toggle("d-none");
            });
          }

          if (tableCellScore) {
            tableCellScore.forEach((cell) => {
              cell.classList.toggle("d-none");
            });
          }

          if (tableCellPoints) {
            tableCellPoints.forEach((cell) => {
              cell.classList.toggle("d-none");
            });
          }

          if (tableHeaderCellForm) {
            tableHeaderCellForm.forEach((cell) => {
              cell.classList.toggle("d-none");
            });
          }

          if (tableCellForm) {
            tableCellForm.forEach((cell) => {
              cell.classList.toggle("d-none");
            });
          }

          tournamentTableTabsAndContent.classList.remove(
            "tournamentTableMobileResolver--show"
          );
        } else {
          if (tableCellValue) {
            tableCellValue.forEach((cell) => {
              cell.classList.remove("d-none");
            });
          }

          if (uiTableHeaderValue) {
            uiTableHeaderValue.forEach((header) => {
              header.classList.remove("d-none");
            });
          }

          if (tableCellPoints) {
            tableCellPoints.forEach((cell) => {
              cell.classList.remove("d-none");
            });
          }

          if (uiTableHeaderTotal) {
            uiTableHeaderTotal.forEach((header) => {
              header.classList.remove("d-none");
            });
          }

          if (tableCellTotal) {
            tableCellTotal.forEach((cell) => {
              cell.classList.remove("d-none");
            });
          }

          if (tableHeaderCellForm) {
            tableHeaderCellForm.forEach((cell) => {
              cell.classList.remove("d-none");
            });
          }

          if (tableCellForm) {
            tableCellForm.forEach((cell) => {
              cell.classList.remove("d-none");
            });
          }

          tournamentTableTabsAndContent.classList.add(
            "tournamentTableMobileResolver--show"
          );
        }
      }
    };
  }
}

function viewHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

function chatScrollBottom() {
  let btnScrollBottom = $(".list-scroll-bottom");
  if (btnScrollBottom) {
    let box = $(".list-scroll-wrapper");
    
    if (box) {
      // page on load scroll at the bottom 
      box.scrollTop = box.scrollHeight;
    
      box.addEventListener("scroll", (e) => {
        let scrollableHeight = box.scrollHeight - box.clientHeight;

        if (box.scrollTop >= scrollableHeight) {
          // console.log('User has scrolled to the bottom of this section!')
          btnScrollBottom.classList.add("d-none");
        } else {
          btnScrollBottom.classList.remove("d-none");
        }
      });

      btnScrollBottom.onclick = function () {
        box.scrollTop = box.scrollHeight;
      }
    }
  }
}

matchFilterActive();
aboutListActive();
liveBXH();
viewHeight();
chatScrollBottom();
