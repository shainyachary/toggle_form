let indicator = document.querySelector(".indicator");
let signinForm = document.querySelector(".signinForm");
let signupForm = document.querySelector(".signupForm");

function signin() {
  signinForm.style.left = "50px";
  signupForm.style.left = "450px";
  indicator.style.left = "0px";
}

function signup() {
  signinForm.style.left = "-450px";
  signupForm.style.left = "50px";
  indicator.style.left = "110px";
}
