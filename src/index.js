import loadPage from "./modules/displayController.js";
import loadHome from "./modules/home.js";

init();

function init(){
    loadPage();
    loadHome();
    addNavFunctions();
    console.log("test")
}


function addNavFunctions(){
    const homeButton = document.getElementById("Home")
    const menuButton = document.getElementById("Menu")
    const contactButton = document.getElementById("Contact")

    console.log("test")

    homeButton.addEventListener('click', loadHome());
    menuButton.addEventListener('click', console.log("LOAD MENU"));
    contactButton.addEventListener('click', console.log("LOAD CONTACTS"));
}