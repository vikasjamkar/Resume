let menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("bi-x-circle");
});

let typed = new Typed(".auto-input", {
  strings: [
    "Front-End Developer !",
    "React Developer !",
    "Full Stack Web Developer !",
  ],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});
