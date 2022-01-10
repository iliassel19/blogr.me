const navlist = document.querySelector(".nav-list");
const sublist = document.querySelector(".sub-list");
const nvbtns = document.querySelector(".nv-btns");
const navitem = document.querySelector(".nav-item");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (navlist.classList.contains("show")) {
    navlist.classList.remove("show");
    close.style.display = "none";
    hamburger.style.display = "block";
  } else {
    navlist.classList.add("show");
    close.style.display = "block";
    hamburger.style.display = "none";
  }
}

nvbtns.addEventListener("click", toggleMenu);

navitem.addEventListener("click", function () {
  sublist.classList.toggle("subshow");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("mb")) navlist.classList.toggle("show");
    close.style.display = "none";
    hamburger.style.display = "block";
  });
});
