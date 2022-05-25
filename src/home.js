function createHome(){
    const title = document.createElement('div');
    title.textContent = "Le Good Restaurant"

    const restaurant_div = document.createElement('div');
    const restaurant_img = document.createElement('img');
    restaurant_img.src = "../img/hall.jpg";
    restaurant_img.style.height = "200px"
    restaurant_div.appendChild(restaurant_img);

    const description = document.createElement('div');
    description.textContent = "Restaurant Description";

    CONTENT.appendChild(title);
    CONTENT.appendChild(restaurant_div);
    CONTENT.appendChild(description);

}