function createImage(){
    main = document.getElementById('main');

    //creates image
    image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('id','main-image');
    image.setAttribute('src','./putanesca-12.png')

    main.appendChild(image);
}




function loadHome(){

}


export default loadHome;