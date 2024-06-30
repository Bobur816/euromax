$(document).ready(function () {
  $(".shop-menu-btn").on("click", function () {
    $(".shop-menu__box").toggleClass("hide");
  });

  $(".navigation__list").on("click", function (e) {
    // $(".navigation__list-item_link").toggleClass("active");
    if (e.target.classList.contains("navigation__list-item_link")) {
      document.querySelectorAll(".navigation__list-item_link").forEach((el) => {
        el.classList.remove("active");
      });

      e.target.classList.add("active");
    }
  });
});
