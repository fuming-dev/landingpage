const hamburgerMenu = document.getElementById("bars");
const hamburgerMenu_X = document.getElementById("x");
const toggleNav=document.getElementById("close-nav");
hamburgerMenu.addEventListener("click", () => displayMenu());
hamburgerMenu_X.addEventListener("click", ()=> display_X());

function displayMenu() {

  if ((hamburgerMenu.style.display = "block")) 
  {
   
    hamburgerMenu.style.display = "none";
    hamburgerMenu_X.style.display = "block";
    toggleNav.style.display ='flex';


  } 
}

function display_X() {
    
  if ((hamburgerMenu_X.style.display = "block")) 
  {
    hamburgerMenu_X.style.display = "none";
    hamburgerMenu.style.display = "block";
    toggleNav.style.display ='none';

  } 
}


