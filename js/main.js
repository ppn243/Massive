// Progress Bar
window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName("progressBar");
  Array.from(progressBars).forEach((bar) => {
    let windowTop = window.scrollY;
    let windowBot = windowTop + window.innerHeight;
    let eleTop = bar.offsetTop;
    let eleBot = eleTop + bar.clientHeight;
    if (eleBot <= windowBot && eleTop >= windowTop) {
      bar.classList.add("active");
    }
  });
};

// NAVBAR ACTIVE
$(".massiveNav .nav-item").on("click", function () {
  $(".massiveNav").find(".active").removeClass("active");
  $(this).addClass("active");
});

// var mainNav = document.getElementsByClassName("navbar-nav");
// console.log(mainNav);
// var listNav = mainNav[0].getElementsByTagName("li");
// console.log(listNav);
// for (var i = 0; i < listNav.length; i++) {
//   listNav[i].addEventListener("click", function () {
//     // Tìm thẻ đang được gắn active
//     var current = document.querySelector(".navbar-item .active");
//     // Xóa class active của thẻ đang được gắn
//     current.className = current.className.replace("active", "");
//     // Thêm class active vào cho thẻ li khi được click
//     // nav-item class = "nav-item active"
//     this.className += "active";
//   });
// }

// ISOTOPE (FILTER)

let iso = new Isotope(".showcase__content", {
  itemSelector: ".showcase__item",
  // layoutMode: "fitRows"
});
let filtersElem = document.querySelector(".filter-nav");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "a")) {
    return;
  }
  let filterValue = event.target.getAttribute("data-filter");
  // use matching filter function
  iso.arrange({ filter: filterValue });
});

$(".massiveShowcase .nav-link").on("click", function () {
  $(".massiveShowcase").find(".active").removeClass("active");
  $(this).addClass("active");
});

// MAGNIFIC POPUP
$(".popup-link").magnificPopup({
  type: "image",
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

// COUNTUP
$(".numbers__counter").countUp();

// OWL CAROUSEL
$(".feedback___carousel").owlCarousel({
  loop: Infinity,
  margin: 0,
  nav: false,
  autoplay: true,
  // autoplayTimeout: 3000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    784: {
      items: 3,
    },
    1215: {
      items: 1,
    },
  },
});

$(".partners___carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  autoplay: true,
  // autoplayTimeout: 3000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    784: {
      items: 3,
    },
    1215: {
      items: 6,
    },
  },
});
