alert("For best experience use browser on desktop");

let bg = document.getElementById("bg");
let building = document.getElementById("building");
let moon = document.getElementById("moon");
let moon2 = document.getElementById("moon2");
let road = document.getElementById("road");
let textMG = document.getElementById("textMG");

let profile2 = document.getElementById("imgProfile");
let experience2 = document.getElementById("imgExperience");
let skills2 = document.getElementById("imgSkills");

if (window.innerWidth < "500") {
  profile2.src = "./Img/profile2.jpg";
  profile2.style.visibility = "visible";
  experience2.src = "./Img/experience2.jpg";
  experience2.style.visibility = "visible";
  skills2.src = "./Img/skills2.jpg";
  skills2.style.visibility = "visible";
  moon2.removeAttribute("hidden");
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    moon2.style.left = value * 0.5 + "px";
  });
} else if (window.innerWidth > "500") {
  moon2 = "hidden";
  console.log("no");
}

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  bg.style.top = value * 0.5 + "px";
  moon.style.left = value * 0.5 + "px";
  building.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  textMG.style.top = value * 1 + "px";
});

const scriptURL = "https://script.google.com/macros/s/AKfycbwMkSulfmH5WIJPWVMn7VeYymtL_FmAvmIfftuY4Cbg0tQR76KztpDC7eZbhXd6Q-o3Iw/exec";
const form = document.forms["ContactForm"];

const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //klik, show loading
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");

      myAlert.classList.toggle("d-none");

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealSkills);

function revealSkills() {
  let reveals = document.querySelectorAll(".revealSkills");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
