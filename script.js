const text = document.getElementById("text");

const tl = gsap.timeline();
const innerBox = document.getElementById("inner-box");

const box = document.querySelectorAll(".preloader-box");
const boxContainer = document.querySelector(".box-container");
const hor = document.querySelector(".hor");
const ver = document.querySelector(".ver");
const preloader = document.querySelector(".preloader");

tl.to(innerBox, {
  rotate: 180,
  duration: 1,
  delay: 1,
});

tl.to(
  box,
  {
    duration: 1,
    scale: 2,
  },
  "a"
);

tl.to(
  boxContainer,
  {
    duration: 1,
    width: "100%",
    height: "100vh",
  },
  "a"
);

tl.to(
  hor,
  {
    duration: 4,
    rotate: "-80",
    width: "100vw",
    height: "100vh",
  },
  "a"
);

tl.to(
  boxContainer,
  {
    display: "none",
    opacity: 0,
  },
  "a"
);

tl.to(
  hor,
  {
    delay: 2,
    duration: 4,
    opacity: 0,
  },
  "a"
);

tl.to(
  preloader,
  {
    delay: 0.5,
    opacity: 0,
  },
  "a"
);

tl.to(preloader, {
  display: "none",
});

gsap.to("#text span", {
  xPercent: -100,
  duration: 10,
  ease: "linear",
  repeat: -1,
});

const text2 = document.getElementById("text2");

gsap.to(text2, {
  xPercent: -100,
  duration: 3,
  ease: "linear",
  repeat: -1,
});

