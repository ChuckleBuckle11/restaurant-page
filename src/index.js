import loadPage from "./modules/displayController.js";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContacts from "./modules/contact";

init();

function init(){
    loadPage();
    loadHome();
    addNavFunctions();
}


function addNavFunctions(){
    const homeButton = document.getElementById("Home")
    const menuButton = document.getElementById("Menu")
    const contactButton = document.getElementById("Contact")


    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContacts);
}

