// JavaScript Document
console.log("hi");


const HamburgerKnop = document.querySelector("nav ul:nth-of-type(2) li:first-of-type > button");
const sluitButton = document.querySelector("div button:nth-of-type(1)");
const OpenSubmenu1Button = document.querySelector("div > ul:nth-of-type(2) > li:nth-of-type(1) button");
const OpenSubmenu1ButtonLinkjes = document.querySelector("nav ul:nth-of-type(2) >  div li:nth-of-type(1)> ul");
const Opensubmenu2button = document.querySelector(" nav ul:nth-of-type(2) >  div li:nth-of-type(2)> button");
const Opensubmenu2ButtonLinkjes = document.querySelector(" nav ul:nth-of-type(2) >  div li:nth-of-type(2)> ul");
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


OpenSubmenu1Button.addEventListener("click", function(){
    
OpenSubmenu1ButtonLinkjes.classList.toggle("toonSubMenu");
});


// Opensubmenu2button.addEventListener("click", function(){
    
// Opensubmenu2ButtonLinkjes.classList.toggle("toonSubMenu2");
// });


// dark mode

const modeToggle = document.querySelector(".switch input");

modeToggle.onclick = changeMode;

function changeMode() {
  document.body.classList.toggle("dark-mode");
}


// console.log(modeToggle)
// modeToggle.addEventListener("change", () => {
  
// });



