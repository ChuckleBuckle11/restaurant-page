function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}


function createMenu(){
    // creates Menu div
    const menu  = document.createElement('div');
    menu.classList.add("menu");

    menu.appendChild
    (createMenuItem(
        "Carbonara",
        "Cream | Parmesan | Bacon | Italian Herbs"
    ));
    menu.appendChild
    (createMenuItem(
        "Risottocacio Pepee Oro",
        "Carnaroli Rice | Pecorino and Pepper | Gold Dust"
    ));
    menu.appendChild
    (createMenuItem(
        "Risotto Porcini",
        "CarnaroliRice | Porcini Mushrooms | Parmesan Cream"
    ));
    menu.appendChild
    (createMenuItem(
        "Pappardelle All'Anatra",
        "Duck Ragu | Spring Mushrooms | Smoked Scamorza Cream"
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

    const foodImageContainer = document.createElement('div');
    foodImageContainer.classList.add('image-container');
    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image')
    foodImage.src = `./img/${name.toLowerCase()}.jpg`;

    foodImageContainer.appendChild(foodImage);

    menuItem.appendChild(foodImageContainer);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export default loadMenu;
