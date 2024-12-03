// JavaScript Document
console.log("hi");

var menu = document.querySelector("nav ul:nth-of-type(2)"); 
var menuButton  = document.querySelector("nav ul:nth-of-type(2) summary button");
var sluitButton = document.querySelector ("nav ul:nth-of-type(2) details button:nth-of-type(2)")
var OpenSubmenu1Button = document.querySelector("nav details ul:nth-of-type(2) >  li:nth-of-type(1) > button")
var OpenSubmenu1ButtonLinkjes = document.querySelector("nav details ul:nth-of-type(2) >  li:nth-of-type(1)> ul")
var Opensubmenu2button = document.querySelector(" nav details ul:nth-of-type(2) >  li:nth-of-type(2)> button")
var Opensubmenu2ButtonLinkjes = document.querySelector(" nav details ul:nth-of-type(2) >  li:nth-of-type(2)> ul")

menuButton.addEventListener("click", openMenu);

function openMenu(){
    menu.classList.add ("toonMenu");
  }

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu () {
    menu.classList.add("sluitMenu");
}


OpenSubmenu1Button.addEventListener("click", function(){
    
OpenSubmenu1ButtonLinkjes.classList.toggle("toonSubMenu")
});


Opensubmenu2button.addEventListener("click", function(){
    
Opensubmenu2ButtonLinkjes.classList.toggle("toonSubMenu2")
});



