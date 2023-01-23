function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}


function createMenu(){
    // creates Menu div
    const menu  = document.createElement('div');
    menu.classList.add("menu");
    menu.setAttribute('id','menu');

    menu.appendChild
    (createMenuItem(
        "Carbonara",
        "Cream, Parmesan, Bacon, Italian Herbs"
    ));
    
    return menu;

}

function createMenuItem(name, description){
    //creates each Menu Item, appending the food name, description, and image
    // Image names should match food names
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const foodName = document.createElement('h2');
    foodName.classList.add('food-name')
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('food-description')
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image')
    foodImage.src = `./img/${name.toLowerCase()}.png`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export default loadMenu;
