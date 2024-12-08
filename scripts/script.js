// JavaScript Document
console.log("hi");


const HamburgerKnop = document.querySelector("nav ul:nth-of-type(2) li:first-of-type > button");
const sluitButton = document.querySelector("div button:nth-of-type(1)");
const Menu = document.querySelector("nav div")

HamburgerKnop.addEventListener("click", openMenu);

function openMenu(){
    Menu.classList.add ("toonMenu");

    document.body.classList.add("no-scroll")

    sluitButton.classList.remove("knopjeWeg")

    console.log("hoi")
  }

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu(){
  Menu.classList.remove("toonMenu");

  document.body.classList.add("no-scroll")

  sluitButton.classList.add("knopjeWeg")

  console.log("doei")
}


// dark mode

const modeToggle = document.querySelector(".switch input");

modeToggle.onclick = changeMode;

function changeMode() {
  document.body.classList.toggle("dark-mode");
}




