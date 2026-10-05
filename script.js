document.addEventListener("DOMContentLoaded", () => {

  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {

    item.addEventListener("click", () => {

      item.classList.add("clicked");

      setTimeout(() => {
        item.classList.remove("clicked");
      }, 250);

    });

  });

});