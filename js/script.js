const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  homePage = document.getElementById('Home'),
  mainSec = document.getElementById('main-sec');
  PatientSec = document.getElementById('patient-info');

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "الوضع الساطع";
  } else {
    modeText.innerText = "الوضع الداكن";
  }
});

function showMainSec(){
  mainSec.style.display = 'grid'
  PatientSec.style.display = 'none'
}

function showPatientSec(){
  mainSec.style.display = 'none'
  PatientSec.style.display = 'block'
}