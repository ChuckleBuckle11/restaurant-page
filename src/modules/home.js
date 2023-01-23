function createHomeScreen(){
    const main = document.getElementById('main');
    const home = document.createElement('home');
    home.id = "home";
    main.appendChild(home);
}

function createImage(){
    const home = document.getElementById('home');

    //creates image
    const image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('id','main-image');
    image.setAttribute('src','./img/putanesca-12.jpg')

    home.appendChild(image);
}

function createHomeText(){
    const home = document.getElementById('home');
    
    const textContainer = document.createElement('div');
    textContainer.id = "homeContainer";

    const containerHeading = document.createElement('h1');
    containerHeading.id = "homeContainerHeading";
    containerHeading.textContent = "A Haven For Italian Cuisine";

    const containerText = document.createElement('div');
    containerText.id = "homeContainerText";
    containerText.innerHTML = "Since opening its doors in 2004, Casmari is famously known for bringing uniquely rustic Italian cuisine to the tables. Fresh ingredients used with our characteristic recipes from starters, salads, meat dishes and desserts is the bridge between our savoury food and the satisfying smile of our guests. <br> <br>To give you the best of tastes, Casamari signature sauces and bread dough are made fresh every morning. Our chefs bold and adventurous flavours provide new excitement and modern twist to classic Italian staple food of pasta, pizza and vino.";

    textContainer.appendChild(containerHeading);
    textContainer.appendChild(containerText);

    home.appendChild(textContainer);
}


function loadHome(){
    createHomeScreen();
    createImage();
    createHomeText();

    console.log("load home")

}


export default loadHome;