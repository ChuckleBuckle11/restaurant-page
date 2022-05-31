import loadHome from "./home";



function initializeWebsite() {
  
  const content = document.getElementById("content");
  console.log(content);

  content.appendChild(createHeader());
  // content.appendChild(createMain());
  // content.appendChild(createFooter());

  // loadHome();
}



// Creates the header
function createHeader() {
  const CONTENT = document.getElementById("content");
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Restaurant Name"

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}
// Creates the Nav section
function createNav(){
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "Home";

  // homeButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(homeButton);
  //   loadHome();
  // })

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  
  // menuButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(menuButton);
  //   loadMenu();
  // })
  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  
  // contactButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(contactButton);
  //   loadMenu();
  // })
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}



export default initializeWebsite;